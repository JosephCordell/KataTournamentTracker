const User = require('./User');
const Participant = require('./Participant')
const EmptyScores = require('./EmptyScores')
const WeaponScores = require('./WeaponScores')

EmptyScores.belongsTo(Participant, {
    foreignKey: "id",
    foreignKey: 'participant_id'
})
WeaponScores.belongsTo(Participant, {
    foreignKey: "id",
    foreignKey: 'participant_id'
})


module.exports = { User, Participant, EmptyScores, WeaponScores};