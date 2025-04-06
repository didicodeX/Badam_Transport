import { body } from "express-validator";

export const createTechnicianValidator = [
  body("name").notEmpty().withMessage("Le nom est requis"),
  body("gender").isIn(["male", "female", "other"]).withMessage("Genre invalide"),
  body("entryDate").optional().isISO8601().withMessage("Date invalide"),

  body("address.street").notEmpty().withMessage("Rue requise"),
  body("address.city").notEmpty().withMessage("Ville requise"),
  body("address.postalCode").notEmpty().withMessage("Code postal requis"),
  body("address.country").notEmpty().withMessage("Pays requis"),

  body("contract.salary").isNumeric().withMessage("Salaire invalide"),
  body("contract.holidays").isInt({ min: 0 }).withMessage("Congés invalides"),
  body("contract.hours").isInt({ min: 0 }).withMessage("Heures invalides"),
  body("contract.type").isIn(["CDI", "CDD", "Freelance", "Stage"]).withMessage("Type de contrat invalide")
];
