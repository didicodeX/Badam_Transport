import { Router } from "express";
import {
  getAllManufacturers,
  getManufacturerWithTrains,
} from "../controllers/manufacturer.controller.js";

const router = Router();

router.get("/", getAllManufacturers);
router.get("/:id", getManufacturerWithTrains);

export default router;
