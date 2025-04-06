import * as technicianRepo from '../repositories/technician.repository.js';

export const getAllTechnicians = async () => {
  const techs = await technicianRepo.findAllTechnicians();
  return techs;
};

export const createTechnician = async (data) => {
  // 💡 Logique métier : ne pas accepter un salaire < 1500
  if (data.contract.salary < 1500) {
    throw new Error("Le salaire est trop bas pour un technicien.");
  }

  // 💡 Logique métier : les heures doivent être entre 30 et 40
  if (data.contract.hours < 30 || data.contract.hours > 40) {
    throw new Error("Les heures de travail doivent être comprises entre 30 et 40.");
  }

  return await technicianRepo.saveTechnician(data);
};