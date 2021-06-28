const mongoose = require("mongoose");
require("../users/users.model");
require("../pins/pins.model")


const BoardsSchema = new mongoose.Schema({
    title: String,
    author: mongoose.Types.ObjectId,
    pins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "pins"
    }]

});


const BoardModel = mongoose.model("boards", BoardsSchema);

const create = async (board) => {
    const boardCreated  = await BoardModel.create(board);
    return boardCreated;
};

const getAll = async () => {
    const boards = await BoardModel.find().populate('pins');
    return boards;

};

const get = async (id) =>  {
    const board = await BoardModel.findById(id);
    return board;
};

const remove = async (id) => {
    const board = await BoardModel.findByIdAndRemove(id);
    return board;
};


const upDate = async (id, body) => {
    const board = await BoardModel.findByIdAndUpdate(id,body);
    return user;
};

module.exports={
    create,
    getAll,
    get,
    remove,
    upDate,
};