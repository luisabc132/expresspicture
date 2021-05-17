const express = require('express');
const router = express.Router();
const boardsController = require('./boards.controller');




router
  .route('/')
    .get(boardsController.all)
    .post(boardsController.create);
router
  .route('/:id')
    .get(boardsController.get)
    .delete(boardsController.delete)
    .put(boardsController.update);
module.exports = router;




