
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const orderRoutes = require('./routes/orderRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');


const app = express();


app.use(bodyParser.json());
app.use(cors());




app.use('/orders', orderRoutes);
app.use('/reservations', reservationRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/menu-items', menuItemRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the Restaurant Management System API');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
