

module.exports = (sequelize, DataTypes) => {
    const ScoresEmpty = sequelize.define('ScoresEmpty', {
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
    ScoresEmpty.associate = (models) => {
        ScoresEmpty.belongsTo(models.Participant)
    }
    return ScoresEmpty
}