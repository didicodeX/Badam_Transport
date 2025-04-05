import { Router } from "express";
import technicianRoutes from "./technician.route.js";

const router = Router();

// Sous-routes /technicians
router.use("/technicians", technicianRoutes);

// 👇 Route racine "/"
router.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

export default router;
