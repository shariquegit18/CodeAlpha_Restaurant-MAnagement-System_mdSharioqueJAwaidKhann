const express = require('express');
const router = express.Router();
const { getAllReservations, createReservation } = require('../controllers/reservationController');

router.get('/', getAllReservations);
router.post('/', createReservation);

module.exports = router;
