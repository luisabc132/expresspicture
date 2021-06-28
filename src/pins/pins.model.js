const mongoose = require("mongoose");
require("../users/users.model");

const PinsSchema = new mongoose.Schema({
    name: String,
    urlImg: String,
    url:  String,
    userId: mongoose.Types.ObjectId 
});



const PinModel = mongoose.model("pins", PinsSchema);

const create = async (pin) => {
  const pinCreated = await PinModel.create(pin);
  return pinCreated;
};

const getAll = async () => {
    const pins = await PinModel.find();
    return pins;
};

const get = async (id) =>  {
    const pin = await PinModel.findById(id);
    return pin;
}


const remove = async (id) => {
    const pin = await PinModel.findByIdAndRemove(id);
    return pin;
}

const upDate = async (id, body) => {
    const pin = await PinModel.findByIdAndUpdate(id,body);
    return pin;
}




module.exports={
    create,
    getAll,
    get,
    remove,
    upDate,
};