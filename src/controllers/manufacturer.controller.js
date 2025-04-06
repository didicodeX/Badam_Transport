import * as manufaturerService from "../services/manufacturier.service.js";

export const getAllManufacturers = async (req, res) => {
  try {
    const manufacturers = await manufaturerService.getAllManufacturers();
    res.json(manufacturers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getManufacturerWithTrains = async (req, res) => {
  try {
    const { id } = req.params;
    const manufacturer = await manufaturerService.getManufacturerWithTrains(id);
    res.status(200).json(manufacturer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
