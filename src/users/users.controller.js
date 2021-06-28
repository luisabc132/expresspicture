const UserModel = require("./users.model");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");



const all = async (req, res) =>{
  const users = await UserModel.getAll();
  res.json(users);
};

const create = async (req, res) =>{
  const salt = bcrypt.genSaltSync(10);
  const entities = await UserModel.create({
    email:req.body.email,
    name:req.body.name,
    urlImgUser: req.body.urlImgUser,
    password: bcrypt.hashSync(req.body.password, salt),
  });
  const token = jwt.sign({id: entities.id},process.env.TOKEN_SECRET);
  res.status(201).json(token);
};

const get = async (req, res) =>{
  const user = await UserModel.get(req.params.id);
  const id = (req.params.id)
 
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(404).json({ error: "user not found"})

}



const remove = async (req, res) =>{
  const user = await UserModel.get(req.params.id);
  const id = (req.params.id);
  if (user) {
    UserModel.remove(id);
    return res.status(200).json("borrado");
  } 
  return res.status(404).json({ error: "user not found" });
};




const update = async (req, res) =>{
  const user =  await UserModel.get(req.params.id)
  const id = (req.params.id);
  if (user) {
    const body = req.body;
    UserModel.upDate(id, body);
    return res.status(200).json(body);
  }
  return res.status(404).json({ error: "user not found" });
};


module.exports = {
  all,
  create,
  get,
  remove,
  update,
};