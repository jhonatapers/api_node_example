const Sequelize = require('sequelize')
const dataConfig = require('../config/env').dataConfig

const host = dataConfig.host
const dialect = dataConfig.dialect

const connection = new Sequelize(dataConfig.database, dataConfig.username, dataConfig.password, {
    host,
    dialect
})

module.exports = connection