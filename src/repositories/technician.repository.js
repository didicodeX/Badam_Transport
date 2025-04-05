import { Technician } from '../models/technician.model.js';

export const findAllTechnicians = () => {
  return Technician.find()
    .select('name address contract')
};
