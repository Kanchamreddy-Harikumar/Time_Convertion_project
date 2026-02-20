import express from "express";
import routers from "./routers/authRouters.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// Get __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend as static
app.use(express.static(path.join(__dirname, "../frontend")));

// Show signup page immediately at root
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/auth/signup/signup.html"));
});

//show loginPage

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname,"../frontend/dashboard/dashboard.html"))
})
// API routes
app.use("/auth", routers);

export default app;

