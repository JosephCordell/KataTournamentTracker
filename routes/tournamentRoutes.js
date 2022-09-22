const router = require('express').Router()
const {Participant} = require('../models')

// const { authorization } = require('../config/authorization')
const jwt = require('jsonwebtoken')

router.post('/addParticipant', /* authorization, */ async (req, res) => {
    try {
        console.log(req.body);
        await Participant.create(req.body)
        res.status(200).json()

    } catch (err) {
        res.status(400).json(err);
    }

})

router.post('/addEmptyScore', /* authorization, */ async (req, res) => {
    try {
        console.log('test');
        // let participant = await Participant.findOne({ where: {id: req.id}})

        await EmptyScores.create(req.body)
        res.status(200).json()

    } catch (err) {
        console.log(err);
        if (err.errors) {
            for (let i = 0; i < err.errors.length; i++) {
                if (err.errors[i].validatorKey === 'not_unique') {
                    res.status(200).json('Success!');
                    return;
                }
            }
        }
        res.status(400).json(err);
    }

})

router.get('/emptyScore', async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.body.id);
        let emptyScores = await EmptyScores.findAll({ where: { participant_id: req.body.id } })
        console.log(emptyScores);
        res.status(200).json(emptyScores)

    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/participant', async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.body.id);
        let participant = await Participant.findAll({ where: { id: req.body.id } })
        console.log(participant);
        res.status(200).json(participant)

    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/divisions', async (req, res) => {
    try {
        console.log('test');
        const divisions = await Participant.findAll()
        console.log('found divisions');
        console.log(divisions);
        res.status(200).json(divisions)
    } catch (err) {
        res.status(400).json(err);
    }
})
module.exports = router