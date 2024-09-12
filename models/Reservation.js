const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: Date,
  time: String,
  tableNumber: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reservation', reservationSchema);
