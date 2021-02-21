const express = require('express');
const orders = require('../routes/orders');
const users = require('../routes/users');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/orders', orders);
  app.use('/api/users', users);
}