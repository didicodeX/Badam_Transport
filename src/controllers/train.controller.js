import * as trainService from "../services/train.service.js"

export const getAllTrains = async (req,res) => {
  try {
    const trains = await trainService.findAllTrains();
    res.status(200).json(trains);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

}