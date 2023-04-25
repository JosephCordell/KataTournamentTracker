const User = require('./User');
const Participant2023 = require('./Participant2023')
const EmptyScores = require('./EmptyScores')
const WeaponScores = require('./WeaponScores')

EmptyScores.belongsTo(Participant2023, {
    foreignKey: "id",
    foreignKey: 'participant2023_id'
})
WeaponScores.belongsTo(Participant2023, {
    foreignKey: "id",
    foreignKey: 'participant2023_id'
})


module.exports = { User, Participant2023, EmptyScores, WeaponScores};
