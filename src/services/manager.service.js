
import * as managerRepo from '../repositories/manager.repository.js';

export const getManagers = async () => {
  return await managerRepo.getAllManagers();
};

export const createManager = async (manager) => {
  return await managerRepo.createManager(manager);
};