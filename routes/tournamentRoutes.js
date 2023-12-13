const router = require('express').Router()
const { Participant2024, EmptyScores } = require('../models')
const Sequelize = require('sequelize')

const { authorization } = require('../config/authorization')
const jwt = require('jsonwebtoken')

router.post('/addParticipant', authorization, async (req, res) => {
    try {
        await Participant2024.create(req.body)
        res.status(200).json()

    } catch (err) {
        res.status(400).json(err);
    }

})



router.get('/emptyScore', async (req, res) => {
    try {
        let emptyScores = await EmptyScores.findAll({ where: { participant2024_id: req.body.id } })
        res.status(200).json(emptyScores)

    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/participant', async (req, res) => {
    try {
        let participant = await Participant2024.findAll({ where: { id: req.body.id } })
        res.status(200).json(participant)

    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/divisions', async (req, res) => {
    try {
        const divisions = await Participant2024.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('belt_color')), 'belt_color']
            ]
        })
        res.status(200).json(divisions)
    } catch (err) {
        res.status(400).json(err);
    }
})

router.put('/divisions/weapons', async (req, res) => {
    try {
        let weapons = await Participant2024.findAll({ where: { age_group: req.body.age_group, weapons_division: 'yes' } })
        res.status(200).json(weapons)
    } catch (err) {
        console.log('WE GOT AN ERROR');
        res.status(400).json(err);
    }
})

router.put('/divisions/group', async (req, res) => {
    try {
        let group = await Participant2024.findAll({ where: { belt_color: req.body.belt_color, age_group: req.body.age_group } })
        res.status(200).json(group)
    } catch (err) {
        res.status(400).json(err);
    }
})

router.put('/updateScore', authorization, async (req, res) => {
    try {
        req.body.weapons ?
            await Participant2024.update({ weapon_score: req.body.weapon_score }, { where: { id: req.body.id } })
            :
            await Participant2024.update({ empty_score: req.body.empty_score }, { where: { id: req.body.id } })

        res.status(200).json()

    } catch (err) {
        res.status(400).json(err);
    }

})

module.exports = router