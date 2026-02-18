import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "time_user_db",
    password:"H@ri2001"
})

export default db;