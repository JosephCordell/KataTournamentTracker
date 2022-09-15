const { Model, DataTypes } = require ('sequelize')
const sequelize = require('../config/connections')

class Participant extends Model {}

Participant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        division: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rank: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'participants',
    }
)

/* Participant.associate = (models) => {
    Participant.hasMany(Scores.Participant, {
        as: 'participant',
        foreignKey: "participantId",
    })
} */

module.exports = Participant