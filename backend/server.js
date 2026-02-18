import app from "./app.js";
import db from "./database/time_converter_db.js"


db.connect((err) => {
    
    if (err) {
        console.log("Database connection failed: " + err.message)
    }
    console.log("Database connected successfully")

    app.listen(3000, () => {
        console.log("server runs on http://localhost/3000")
    })
})