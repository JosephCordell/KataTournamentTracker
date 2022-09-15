const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class ScoresEmpty extends Model {}

ScoresEmpty.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        participant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'participant',
                key: 'id',
            },
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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'scoresempty',
    }
)

module.exports = ScoresEmpty
