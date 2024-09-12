const express = require('express');
const router = express.Router();
const { getAllInventoryItems, createInventoryItem, updateInventoryItem, deleteInventoryItem } = require('../controllers/inventoryController');

// Get all inventory items
router.get('/', getAllInventoryItems);

// Create a new inventory item
router.post('/', createInventoryItem); // Make sure POST route is correct

// Update an inventory item
router.patch('/:item_id', updateInventoryItem);

// Delete an inventory item
router.delete('/:item_id', deleteInventoryItem);

module.exports = router;
