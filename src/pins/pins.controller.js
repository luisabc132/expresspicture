const jwt = require('jsonwebtoken');
const PinModel = require("./pins.model");


const all = async (req, res) =>{
  const pins = await PinModel.getAll();
  res.json(pins);
};

const create = async (req, res) =>{
  const token = req.headers.authorization.split(' ')[1];
  const tokenDecoded = jwt.decode(token);
  console.log(tokenDecoded);
  console.log("esta mierda")

  const entities = await PinModel.create({...req.body, userId: tokenDecoded.id});
  res.status(201).json(entities);

};

const get = async (req, res) =>{
  const pin = await PinModel.get(req.params.id);
  const id = (req.params.id)
  console.log(pin)
  if (pin) {
    return res.status(200).json(pin);
  }
  return res.status(404).json({ error: "pin not found"})

}



const remove = async (req, res) =>{
  const pin = await PinModel.get(req.params.id);
  const id = (req.params.id);
  if (pin) {
    PinModel.remove(id);
    return res.status(200).json("borrado");
  } 
  return res.status(404).json({ error: "pin not found" });
};




const update = async (req, res) =>{
  const pin =  await PinModel.get(req.params.id)
  const id = (req.params.id);
  if (pin) {
    const body = req.body;
    PinModel.upDate(id, body);
    return res.status(200).json(body);
  }
  return res.status(404).json({ error: "pin not found" });
};


module.exports = {
  all,
  create,
  get,
  remove,
  update,
};