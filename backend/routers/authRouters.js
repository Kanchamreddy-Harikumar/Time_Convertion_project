import { signUp, logIn } from "../controllers/authControllers.js";
import express from "express";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);

export default router;
