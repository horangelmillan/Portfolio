const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const configDev = {
    dialect: process.env.DEV_DIALECT,
    host: process.env.DEV_HOST,
    port: process.env.DEV_PORT,
    username: process.env.DEV_USER,
    password: process.env.DEV_PASSWORD,
    database: process.env.DEV,
    logging: false
};

const configProd = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    logging: false,
    dialectOptions: {
        ssl: {
            required: true,
            rejectUnauthorized: false
        }
    }
};

const db = new Sequelize(process.env.NODE_ENV === 'production' ? configProd : configDev);

module.exports = { db, DataTypes };