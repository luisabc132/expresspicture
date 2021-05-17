const persimon = require('../../utils/persimon');
const db = persimon('/resources/boards/boards.json');



const boardsController = {
  all (req, res) {
      const boards = db.all();
      res.json(boards);
  },
  get (req, res) {
      const board = db.get(req.params.id);
      if (board) {
        return res.status(200).json(board);
      }
      return res.status(404).json({ error: "board not found" });
  },
  create (req, res) {
      const entities = db.create(req.body);
      res.status(201).json(entities);
  },
  
  delete (req, res) {
      const id = req.params.id;
      const board = db.get(id);
      if (board) {
        db.delete(id);
        return res.status(200).json(board);
      }
      return res.status(404).json({ error: "board not found" });
  },
  update (req, res) {
      const id = req.params.id;
      const board = db.get(id);
      if (board) {
        const body = req.body;
        db.update(id, body);
        return res.status(200).json(body);
      }
      return res.status(404).json({ error: "board not found" });
  }
};
module.exports = boardsController;