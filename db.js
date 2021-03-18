
const sqlite3 = require("sqlite3");

const db = new sqlite3.Database(':memory:');

//Create users table

let sql = "CREATE TABLE IF NOT EXISTS `users` ( `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL , `email` VARCHAR(100) NOT NULL , `name` VARCHAR(240) NOT NULL)";

db.run(sql)



module.exports = db;