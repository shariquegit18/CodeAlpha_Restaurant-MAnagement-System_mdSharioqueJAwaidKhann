// controllers/inventoryController.js
const Inventory = require('../models/inventory');

// Get all inventory items
const getAllInventoryItems = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventory items', error });
  }
};

// Create a new inventory item
const createInventoryItem = async (req, res) => {
  try {
    const { name, quantity, unit } = req.body;

    if (!name || !quantity || !unit) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newItem = new Inventory({ name, quantity, unit });
    const savedItem = await newItem.save();
    
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating inventory item', error });
  }
};

// Update an inventory item
const updateInventoryItem = async (req, res) => {
  try {
    const { item_id } = req.params;
    const { quantity } = req.body;

    const updatedItem = await Inventory.findByIdAndUpdate(item_id, { quantity }, { new: true });

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Error updating inventory item', error });
  }
};

// Delete an inventory item
const deleteInventoryItem = async (req, res) => {
  try {
    const { item_id } = req.params;

    const deletedItem = await Inventory.findByIdAndDelete(item_id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting inventory item', error });
  }
};

module.exports = {
  getAllInventoryItems,
  createInventoryItem, // Ensure this is exported for use in routes
  updateInventoryItem,
  deleteInventoryItem
};

