const { db } = require("../config.json")

const mysql = require("mysql2")
const mainDB = mysql.createPool(db)

const pool = mainDB.promise()
module.exports = pool

// hook schema: id secret guild webhook? channel? name? avatar? message
pool.query(
	"CREATE TABLE IF NOT EXISTS `hook` (" +
	"`id` VARCHAR(8) NOT NULL PRIMARY KEY," +
	"`secret` VARCHAR(64) NOT NULL," +
	"`guild` VARCHAR(21) NOT NULL," +
	"`webhook` VARCHAR(128) NOT NULL," +
	"`channel` VARCHAR(21) NOT NULL," +
	"`name` VARCHAR(32) NOT NULL," +
	"`avatar` VARCHAR(512) NOT NULL," +
	"`message` VARCHAR(10240) NOT NULL" +
	")"
)

// user schema: user token access refresh expires
pool.query(
	"CREATE TABLE IF NOT EXISTS `user` (" +
	"`id` VARCHAR(21) NOT NULL PRIMARY KEY," +
	"`token` VARCHAR(20) NOT NULL," +
	"`access` VARCHAR(64) NOT NULL," +
	"`refresh` VARCHAR(64) NOT NULL," +
	"`expires` BIGINT NOT NULL" +
	")"
)
