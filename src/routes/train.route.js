import { Router } from "express";
import { getAllTrains } from "../controllers/train.controller.js";

const router = Router();

router.get("/",getAllTrains)


export default router;