import express from "express";
import routers from "./routers/authRouters.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

//  Serve entire frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api", routers);

// When server starts → show signup page
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/auth/signup/signup.html")
  );
});

export default app;
