const express = require('express');
const router = express.Router();
const pinsController = require('./pins.controller')
const jwt = require('jsonwebtoken');


const middleware = async (req, res, next) => {
  const tokenWithBearer = req.headers.authorization;
  console.log("entre al middleware")

  if (!tokenWithBearer){
    return res.status(401).json('forbidden')
  }
 
  const tokenWithoutBearer = tokenWithBearer.split(' ')[1];
  console.log("sin la cosa " + tokenWithoutBearer);
  jwt.verify(tokenWithoutBearer, process.env.TOKEN_SECRET, function(err) {
      
      if (err) {
        return res.status(400).json(err)
      }
      return next();
  })
}



router
  .route('/')
    .get(pinsController.all)
    .post(middleware,  pinsController.create);
router
  .route('/:id')
    .get(pinsController.get)
    .delete(pinsController.remove)
    .put(pinsController.update);
module.exports = router;