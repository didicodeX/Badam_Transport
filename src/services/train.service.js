import * as trainRepo from "../repositories/train.reposirory.js";

export const findAllTrains = async () => {
  return await trainRepo.findAllTrains();
};
