const express = require("express");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const pins = require('./src/pins/pins.routes');
const boards = require('./src/boards/boards.routes');
const users = require('./src/users/users.routes');


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


