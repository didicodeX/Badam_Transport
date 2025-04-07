import express from "express";
import {
  getManagersHandler,
  createManagerHandler,
} from "../controllers/manager.controller.js";
// import { authenticate } from '../middlewares/auth.middleware.js';
import { checkRole } from "../middlewares/checkRole.middleware.js";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.get("/", checkRole("manager"), getManagersHandler);
router.post("/", createManagerHandler);
export default router;
