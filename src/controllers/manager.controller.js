import * as managerService from "../services/manager.service.js";

export const getManagersHandler = async (req, res) => {
  try {
    const managers = await managerService.getManagers();
    res.status(200).json(managers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createManagerHandler = async (req, res) => {
  try {
    const manager = await managerService.createManager(req.body);
    res.status(201).json(manager);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
