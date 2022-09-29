const router = require('express').Router()
const { Participant, EmptyScores } = require('../models')
const Sequelize = require('sequelize')

// const { authorization } = require('../config/authorization')
const jwt = require('jsonwebtoken')

router.post('/addParticipant', /* authorization, */ async (req, res) => {
    try {
        await Participant.create(req.body)
        res.status(200).json()

    } catch (err) {
        res.status(400).json(err);
    }

})

router.post('/addEmptyScore', /* authorization, */ async (req, res) => {
    try {
        // let participant = await Participant.findOne({ where: {id: req.id}})

        await EmptyScores.create(req.body)
        res.status(200).json()

    } catch (err) {
        res.status(400).json(err);
    }

})

router.get('/emptyScore', async (req, res) => {
    try {
        let emptyScores = await EmptyScores.findAll({ where: { participant_id: req.body.id } })
        res.status(200).json(emptyScores)

    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/participant', async (req, res) => {
    try {
        let participant = await Participant.findAll({ where: { id: req.body.id } })
        res.status(200).json(participant)

    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/divisions', async (req, res) => {
    try {
        const divisions = await Participant.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('belt_color')), 'belt_color']
            ]
        })
        res.status(200).json(divisions)
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/divisions/group', async (req, res) => {
    try {
        console.log('Got here');
        console.log(req.body);
        console.log(req.body.belt_color);
        let group = await Participant.findAll({ where: { belt_color: req.body.belt_color, age_group: req.body.age_group } })

        res.status(200).json(group)
    } catch (err) {
        res.status(400).json(err);
    }
})








module.exports = router