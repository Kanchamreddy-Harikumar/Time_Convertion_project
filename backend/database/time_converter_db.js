import mysql from "mysql2/promise";

const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "time_user_db",
    password:"H@ri2001"
})

export default db;