const { Model, DataTypes } = require ('sequelize')
const sequelize = require('../config/connections')
const EmptyScores = require('./EmptyScores')


class Participant extends Model {}

Participant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age_group: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        belt_color: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        weapons_division: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        empty_score: {
            type: DataTypes.FLOAT,
            allowNull:true
        },
        weapon_score: {
            type: DataTypes.FLOAT,
            allowNull:true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'participant',
    }
)
EmptyScores.associate = function (models) {
    EmptyScores.belongsTo(models.Participant, {foreignKey: 'participantId'})
}
module.exports = Participant