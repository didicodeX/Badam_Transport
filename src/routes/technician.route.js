import express from "express";
import {
  getAllTechnicians,
  createTechnician,
} from "../controllers/technician.controller.js";
import { createTechnicianValidator } from "../validators/technician.validator.js";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.get("/", getAllTechnicians);
router.post("/", createTechnicianValidator, validate, createTechnician);

export default router;
