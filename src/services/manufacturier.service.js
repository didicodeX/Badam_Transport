import * as manufacturerRepo from "../repositories/manufacturer.repository.js";

export const getAllManufacturers = async () => {
  return await manufacturerRepo.getAllManufacturers();
};

export const getManufacturerWithTrains = async (id) => {
  return await manufacturerRepo.getManufacturerWithTrains(id);
};
