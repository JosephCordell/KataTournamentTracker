const User = require('./User');
const Participant2024 = require('./Participant2024')
const EmptyScores = require('./EmptyScores')
const WeaponScores = require('./WeaponScores')

EmptyScores.belongsTo(Participant2024, {
    foreignKey: "id",
    foreignKey: 'participant2024_id'
})
WeaponScores.belongsTo(Participant2024, {
    foreignKey: "id",
    foreignKey: 'participant2024_id'
})


module.exports = { User, Participant2024, EmptyScores, WeaponScores};
