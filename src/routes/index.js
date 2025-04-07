import { Router } from "express";
import technicianRoutes from "./technician.route.js";
import trainRoutes from "./train.route.js"
import manufacturerRoutes from "./manufacturer.route.js"
import managerRoutes from "./manager.route.js"
import usersRoutes from "./user.route.js"

const router = Router();

// Sous-routes /technicians
router.use("/technicians", technicianRoutes);
router.use("/trains", trainRoutes);
router.use("/manufacturers", manufacturerRoutes);
router.use("/managers", managerRoutes);
router.use("/users", usersRoutes);


router.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

export default router;
