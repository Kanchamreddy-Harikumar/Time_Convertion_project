import { signUp, logIn } from "../controllers/authControllers.js";
import express from "express";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", logIn);

export default router;
