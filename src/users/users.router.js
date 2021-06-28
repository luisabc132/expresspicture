const express = require('express');
const router = express.Router();
const usersController = require('./users.controller')
const jwt = require('jsonwebtoken');

/* const middleware = async (req, res, next) => {
  jwt.verify(req.headers.authorization, process.env.TOKEN_SECRET, function(err) {
      if (err) {
        return res.status(400).json(err)
      }
      return next();
  })
}


router.route("/").get(middleware, usersController.all).post(usersController.create); */

router
  .route('/')
    .get(usersController.all)
    .post(usersController.create);
router
  .route('/:id')
    .get(usersController.get)
    .delete(usersController.remove)
    .put(usersController.update);
    
module.exports = router;