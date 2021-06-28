const mongoose = require("mongoose");
require("../pins/pins.model");
const bcrypt = require('bcrypt');

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    urlImgUser: String,
    password: String,
    pins: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref:"pins"
    }]    
});



const UserModel = mongoose.model("users", UsersSchema);


  const create = async (user) => {
    const userCreated = await UserModel.create(user);
    return userCreated;

  }
  
  
  const getAll = async () => {
      const users = await UserModel.find().populate('pins');
      return users;
  };
  
  const get = async (id) =>  {
      const user = await UserModel.findById(id);
      return user;
  }

  const search = async (query) =>  {
    const user = await UserModel.findOne(query);
    return user;
}
  
  
  const remove = async (id) => {
      const user = await UserModel.findByIdAndRemove(id);
      return user;
  }
  
  const upDate = async (id, body) => {
      const user = await UserModel.findByIdAndUpdate(id,body);
      return user;
  }
  
  
  
  
  module.exports={
      create,
      getAll,
      get,
      remove,
      upDate,
      search,
  };