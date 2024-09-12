const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);
