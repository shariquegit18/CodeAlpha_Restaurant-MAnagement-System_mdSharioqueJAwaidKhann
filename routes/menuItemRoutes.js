const express = require('express');
const router = express.Router();
const { getAllMenuItems, createMenuItem } = require('../controllers/menuItemController');

router.get('/', getAllMenuItems);
router.post('/', createMenuItem);

module.exports = router;
