const express = require("express");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
require('dotenv').config()
const pins = require('./src/pins/pins.router');
const boards = require('./src/boards/boards.router');
const users = require('./src/users/users.router');
const auth = require('./src/auth/auth.router')
const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(
  process.env.DB_HOST,
  options
);
mongo.then(() =>{
  console.log("mongo listo");
});

global.appRoot = path.resolve(__dirname);

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.disable("x-powered-by");
app.use('/pins', pins);
app.use('/boards', boards);
app.use('/users', users);
app.use("/auth", auth);

/* app.patch("/editPin/:id", (request, response)=> {
  const pin = db.update(request.params.id)
  if (pin) {
    return response.status(200).json('edit')

  }
  return response.status(404).end();

}) 
 */
/* app.get("/test", (request, response) => {
  response.send("Soy un test!");
});

app.post("/miPrimerPost",(request, response) =>{
    const body = request.body;
    response.status(200).json(body);

})

app.get("/numero/:numero", (request, response) =>{
    const numero = request.params.numero;
    response.status(200).json(numero);

    
});

app.post("/suma", (request, response)=>{
    const body = request.body;
    const suma = body.a + body.b;
    response.status(200).json(suma);
    
}) */



const start = async () => {
  try {
    app.listen(5000, () => {
      console.log(`REST API on http://localhost:5000/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();


