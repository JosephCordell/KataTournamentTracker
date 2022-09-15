const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class ScoresWeapon extends Model {}

ScoresWeapon.init(
    {
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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'scoresweapon',
    }
)
module.exports = ScoresWeapon