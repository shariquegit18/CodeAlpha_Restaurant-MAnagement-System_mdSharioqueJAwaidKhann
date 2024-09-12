const MenuItem = require('../models/MenuItem');

// Get all menu items
const getAllMenuItems = async (_req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving menu items', error });
  }
};

// Create a new menu item
const createMenuItem = async (req, res) => {
  try {
    const newMenuItem = new MenuItem(req.body);
    await newMenuItem.save();
    res.status(201).json(newMenuItem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating menu item', error });
  }
};

module.exports = {
  getAllMenuItems,
  createMenuItem
};
