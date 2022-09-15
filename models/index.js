const User = require('./User');
const Participant = require('./Participant')
const ScoresEmpty = require('./ScoresEmpty')
const ScoresWeapon = require('./ScoresWeapon')

Participant.hasMany(ScoreEmpty, {
    foreignKey: 'participant_id'
})
Participant.hasMany(ScoreWeapon, {
    foreignKey: 'participant_id'
})


module.exports = { User, Participant, ScoreEmpty, ScoreWeapon};