const persimon = require('../../utils/persimon');
const db = persimon('/resources/users/users.json');



const usersController = {
  all (req, res) {
      const users = db.all();
      res.json(users);
  },
  get (req, res) {
      const user = db.get(req.params.id);
      if (user) {
        return res.status(200).json(user);
      }
      return res.status(404).json({ error: "user not found" });
  },
  create (req, res) {
      const entities = db.create(req.body);
      res.status(201).json(entities);
  },
  
  delete (req, res) {
      const id = req.params.id;
      const user = db.get(id);
      if (user) {
        db.delete(id);
        return res.status(200).json(user);
      }
      return res.status(404).json({ error: "user not found" });
  },
  update (req, res) {
      const id = req.params.id;
      const user = db.get(id);
      if (user) {
        const body = req.body;
        db.update(id, body);
        return res.status(200).json(body);
      }
      return res.status(404).json({ error: "user not found" });
  }
};
module.exports = usersController;