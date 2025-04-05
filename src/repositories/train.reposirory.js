import { Train } from '../models/train.model.js';
import { Manufacturer } from '../models/manufacturer.model.js';

export const findAllTrains = () => {
  return Train.find().populate("manufacturer","name address")
};
