const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  tableNumber: Number,
  items: [{ name: String, quantity: Number }],
  totalAmount: Number,
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
