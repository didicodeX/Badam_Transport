
import { body } from 'express-validator';
import { DepartmentEnum } from '../constants/enum.constant.js';

export const createManagerRules = [
  body('name').notEmpty().withMessage('Le nom est requis'),
  body('department').isIn(DepartmentEnum).withMessage('Département invalide'),
  body('expertise').optional().isString().withMessage("L'expertise doit être une chaîne de caractères"),
  body('yearsOfExperience').isNumeric().withMessage("Les années d'expérience doivent être un nombre"),
];
