import express from 'express';
import { getAllTechnicians } from '../controllers/technician.controller.js';

const router = express.Router();

router.get('/', getAllTechnicians);

export default router;
