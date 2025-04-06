
import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';
import { Technician } from '../models/technician.model.js';
import { Instructor } from '../models/instructor.model.js';
import { Manager } from '../models/manager.model.js';

export const registerUserWithRole = async (data) => {
  const { email, password, role, technician, instructor, manager } = data;

  if (!email || !password || !role) {
    throw new Error("Champs email, mot de passe et rôle sont requis.");
  }

  let relatedId = null;

  if (role === 'technician') {
    if (!technician) throw new Error("Données technician manquantes");
    const newTechnician = await Technician.create(technician);
    relatedId = newTechnician._id;
  }

  if (role === 'instructor') {
    if (!instructor) throw new Error("Données instructor manquantes");
    const newInstructor = await Instructor.create(instructor);
    relatedId = newInstructor._id;
  }

  if (role === 'manager') {
    if (!manager) throw new Error("Données manager manquantes");
    const newManager = await Manager.create(manager);
    relatedId = newManager._id;
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashed, role });

  if (role === 'technician') user.technician = relatedId;
  if (role === 'instructor') user.instructor = relatedId;
  if (role === 'manager') user.manager = relatedId;

  await user.save();
  return user;
};
