const express = require('express');
const todoRoutes = express.Router();
const todoController = require('../controllers/nutri-controller');
const authHelpers = require('../services/auth/auth-helpers');

nutriRoutes.get('/', nutriController.index);
nutriRoutes.post('/', nutricontroller.create);

nutriRoutes.get('/add', (req, res) => {
  res.render('nutriList/nutri-add', {
    currentPage: 'add',
  });
});

nutriRoutes.get('/:id/edit', nutriController.edit);
nutriROutes.get('/:id', nutriController.show);
nutriRoutes.put('/:id', nutriController.update);
nutriRoutes.delete('/:id', nutriController.delete);

module.exxports = nutriRoutes;