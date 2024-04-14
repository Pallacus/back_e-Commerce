// Creación y configuración de la APP de Express
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuración de rutas
app.use('/categories', require('./routes/categories'));
app.use('/comments', require('./routes/comments'));
app.use('/favorites', require('./routes/favorites'));
app.use('/orders', require('./routes/orders'));
app.use('/products', require('./routes/products'));
app.use('/users', require('./routes/users'));


module.exports = app;