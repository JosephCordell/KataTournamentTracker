const router = require('express').Router()
const Participant = require('../models/Participant')
const ScoresEmpty = require('../models/ScoresEmpty')
const ScoresWeapon = require('../models/ScoresWeapon')
const { authorization } = require('../config/authorization')
const jwt = require('jsonwebtoken')

router.post('/addParticipant', authorization, async (req, res) => {
    try {
        console.log('adding Partcipant');
        
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

module.exports = router