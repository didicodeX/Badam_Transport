import { Manufacturer } from "../models/manufacturer.model.js";
import { Train } from "../models/train.model.js";

// Retourne un fabricant avec la liste des trains qu’il a fabriqués
export const getAllManufacturers = async (req, res) => {
  return await Manufacturer.find();
};

export const getManufacturerWithTrains = async (id) => {
  const manufacturer = await Manufacturer.findById(id)
    .select("name rating address")
    .lean();

  if (!manufacturer) return null;

  const trains = await Train.find({ manufacturer: id }).select("price type");
  return { ...manufacturer, trains };
};

/**
 * return Manufacturer.findById(id)
  .select('name rating address')
  .lean() // ✅ ici
  .then(async (manufacturer) => {
    const trains = await Train.find({ manufacturer: id }).select('price type');
    return { ...manufacturer, trains };
  });
 */
