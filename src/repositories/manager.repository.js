
import { Manager } from '../models/manager.model.js';

export const getAllManagers = () => {
  return Manager.find().select("name department expertise yearsOfExperience").lean();
};

export const createManager = (manager) => {
  return Manager.create(manager);
};