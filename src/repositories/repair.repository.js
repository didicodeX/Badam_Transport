import Repair from "../models/repair.model.js"

export const findRepairById = (id) => {
  return Repair.findById(id)
    .populate({
      path: 'train',
      select: 'price type manufacturer',
      populate: {
        path: 'manufacturer',
        select: 'name address.country'
      }
    })
    .populate({
      path: 'technician',
      select: 'name gender contract',
    });
};
