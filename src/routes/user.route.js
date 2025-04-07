import express from "express";
import { registerUserWithRole } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", registerUserWithRole);
export default router;
