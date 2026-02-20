import app from "./app.js";
import db from "./database/time_converter_db.js";

const startServer = async () => {
    try {
        await db.connect();
        console.log("Database Connected Successfully");

        app.listen(3000, () => {
            console.log("Server runs on http://localhost:3000/auth/login/login.html");
        });

    } catch (err) {
        console.log("Database Connection Failed", err);
    }
};

startServer();
