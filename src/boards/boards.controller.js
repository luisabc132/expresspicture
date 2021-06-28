const { json } = require('body-parser');
const BoardModel  = require('./boards.model');


const all = async (req,res) =>{
  const boards = await BoardModel.getAll()
  res.json(boards);
}


const create = async (req, res) =>{
  const entities = await BoardModel.create(req.body);
  res.status(201).json(entities);

};




const get = async (req,res) => {
  const board = await BoardModel.get(req.params.id);
  const id = (req.params.id)
  if (board){
    return res.status(200).json(board);
  }
  return res.status(404),json({error: "Board no found"});

}


const remove = async (req, res) =>{
  const board = await BoardModel.get(req.params.id);
  const id = (req.params.id);
  if (board) {
    BoardModel.remove(id);
    return res.status(200).json("borrado");
  } 
  return res.status(404).json({ error: "Board not found" });
};

const update = async (req, res) =>{
  const board =  await BoardModel.get(req.params.id)
  const id = (req.params.id);
  if (board) {
    const body = req.body;
    BoardModel.upDate(id, body);
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