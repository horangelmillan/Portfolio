const { db, DataTypes } = require('../utils/database.util');

const Project = db.define('project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    urlDeploy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    urlRepository: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'normal'
    }
});

module.exports = { Project };