import * as technicianService from '../services/technician.service.js';

export const getAllTechnicians = async (req, res) => {
  try {
    const technicians = await technicianService.getAllTechnicians();
    res.status(200).json(technicians);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTechnician = async (req, res) => {
  try {
    const technician = await technicianService.createTechnician(req.body);
    res.status(201).json(technician);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
