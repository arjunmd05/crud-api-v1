import express from "express";
import { register, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", loginUser);

export default router;
