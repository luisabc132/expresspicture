const express = require('express');
const router = express.Router();
const usersController = require('./users.controller')

router
  .route('/')
    .get(usersController.all)
    .post(usersController.create);
router
  .route('/:id')
    .get(usersController.get)
    .delete(usersController.delete)
    .put(usersController.update);
module.exports = router;