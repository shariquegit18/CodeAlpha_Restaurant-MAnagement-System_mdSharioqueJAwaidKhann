const Reservation = require('../models/Reservation');

// Get all reservations
const getAllReservations = async (_req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving reservations', error });
  }
};

// Create a new reservation
const createReservation = async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ message: 'Error creating reservation', error });
  }
};

module.exports = {
  getAllReservations,
  createReservation
};
