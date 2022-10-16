const { db, DataTypes } = require('../utils/database.util');

const Profile = db.define('profile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = { Profile };