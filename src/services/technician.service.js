import * as technicianRepo from '../repositories/technician.repository.js';

export const getAllTechnicians = async () => {
  const techs = await technicianRepo.findAllTechnicians();
  return techs;
};
