const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
