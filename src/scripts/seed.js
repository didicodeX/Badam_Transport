// import "dotenv/config"
// import mongoose from 'mongoose';
// import { faker } from '@faker-js/faker';
// import "../config/database.config.js"

// import { Technician } from '../models/technician.model.js';
// import { Manufacturer } from '../models/manufacturer.model.js';
// import { Train } from '../models/train.model.js';
// import { Repair } from '../models/repair.model.js';

// const GENDERS = ['male', 'female', 'other'];
// const CONTRACT_TYPES = ['CDI', 'CDD', 'Freelance', 'Stage'];
// const TRAIN_TYPES = ['TGV', 'TER', 'ICE', 'Freight'];

// const seed = async () => {
//   console.log('🧹 Suppression des données...');
//   await Promise.all([
//     Technician.deleteMany(),
//     Manufacturer.deleteMany(),
//     Train.deleteMany(),
//     Repair.deleteMany()
//   ]);

//   const manufacturers = [];
//   const technicians = [];
//   const trains = [];

//   // 1. Seed Manufacturers
//   for (let i = 0; i < 5; i++) {
//     const manufacturer = await Manufacturer.create({
//       name: faker.company.name(),
//       rating: faker.number.float({ min: 3, max: 5, precision: 0.1 }),
//       address: {
//         street: faker.location.streetAddress(),
//         city: faker.location.city(),
//         postalCode: faker.location.zipCode(),
//         phoneNumber: faker.phone.number(),
//         country: faker.location.country()
//       }
//     });
//     manufacturers.push(manufacturer);
//   }

//   // 2. Seed Technicians (avec contrat imbriqué)
//   for (let i = 0; i < 15; i++) {
//     const technician = await Technician.create({
//       name: faker.person.fullName(),
//       gender: faker.helpers.arrayElement(GENDERS),
//       entryDate: faker.date.past({ years: 5 }),
//       address: {
//         street: faker.location.streetAddress(),
//         city: faker.location.city(),
//         postalCode: faker.location.zipCode(),
//         phoneNumber: faker.phone.number(),
//         country: faker.location.country()
//       },
//       contract: {
//         salary: faker.number.int({ min: 2500, max: 6000 }),
//         holidays: faker.number.int({ min: 20, max: 40 }),
//         hours: faker.number.int({ min: 30, max: 40 }),
//         type: faker.helpers.arrayElement(CONTRACT_TYPES)
//       }
//     });
//     technicians.push(technician);
//   }

//   // 3. Seed Trains
//   for (let i = 0; i < 20; i++) {
//     const train = await Train.create({
//       price: faker.commerce.price({ min: 1000000, max: 5000000, symbol: '$' }),
//       creationDate: faker.date.past({ years: 3 }),
//       type: {
//         name: faker.helpers.arrayElement(TRAIN_TYPES),
//         maxSpeed: faker.number.int({ min: 100, max: 400 })
//       },
//       manufacturer: faker.helpers.arrayElement(manufacturers)._id
//     });
//     trains.push(train);
//   }

//   // 4. Seed Repairs
//   for (let i = 0; i < 25; i++) {
//     await Repair.create({
//       train: faker.helpers.arrayElement(trains)._id,
//       technician: faker.helpers.arrayElement(technicians)._id,
//       repairDate: faker.date.between({ from: '2022-01-01', to: '2024-12-31' })
//     });
//   }

//   console.log('✅ Seed terminée avec succès !');
//   mongoose.disconnect();
// };

// seed();
