const { db } = require("../config.json")

const mysql = require("mysql2")
const mainDB = mysql.createPool(db)

const pool = mainDB.promise()
module.exports = pool

pool.query(
	"CREATE TABLE IF NOT EXISTS `hook` (" +
	"`id` VARCHAR(8) NOT NULL PRIMARY KEY," +
	"`name` VARCHAR(32) NOT NULL," +
	"`secret` VARCHAR(64) NOT NULL," +
	"`server` VARCHAR(21) NOT NULL," +
	"`channel` VARCHAR(21) NULL DEFAULT NULL," +
	"`webhook` VARCHAR(128) NULL DEFAULT NULL," +
	"`message` VARCHAR(10240) NULL DEFAULT NULL," + // Either JSON message data or a string referring to a template. If null, use default template.
	"`filterEvent` VARCHAR(256) NULL DEFAULT NULL," +
	"`filterAction` VARCHAR(256) NULL DEFAULT NULL" +
	")"
)

pool.query(
	"CREATE TABLE IF NOT EXISTS `user` (" +
	"`id` VARCHAR(21) NOT NULL PRIMARY KEY," +
	"`token` VARCHAR(20) NOT NULL," +
	"`access` VARCHAR(64) NOT NULL," +
	"`refresh` VARCHAR(64) NOT NULL," +
	"`expires` BIGINT NOT NULL" +
	")"
)
