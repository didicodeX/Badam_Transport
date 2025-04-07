
import { Manufacturer } from '../models/manufacturer.model.js';
import { Train } from '../models/train.model.js';

export const findManufacturerWithTrains = async (id) => {
  const manufacturer = await Manufacturer.findById(id)
    .select('name rating address')
    .lean();

  if (!manufacturer) return null;

  const trains = await Train.find({ manufacturer: id }).select('price type');
  return { ...manufacturer, trains };
};
