
module.exports = (sequelize, DataTypes) => {
    const ScoresWeapons = sequelize.define('ScoresWeapons', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        score1: {
            type: DataTypes.FLOAT(2),
        },
        score2: {
            type: DataTypes.FLOAT(2),
        },
        score3: {
            type: DataTypes.FLOAT(2),
        },
        score4: {
            type: DataTypes.FLOAT(2),
        },
        score5: {
            type: DataTypes.FLOAT(2),
        },
        total_score: {
            type: DataTypes.FLOAT(2),
        },
    })
    ScoresWeapons.associate = (models) => {
        ScoresWeapons.belongsTo(models.Participant)
    }
    return ScoresWeapons
}