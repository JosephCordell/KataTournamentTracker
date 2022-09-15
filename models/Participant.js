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
        participant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'participant',
                key: 'id',
            },
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
        modelName: 'participant',
    }
)

module.exports = Participant