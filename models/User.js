const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./Role');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id'
        }
    }
}, {
    tableName: 'users',
    timestamps: false
});

User.belongsTo(Role, { foreignKey: 'role_id', onDelete: 'SET NULL' });

module.exports = User;
