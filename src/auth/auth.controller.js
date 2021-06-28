const UserModel = require("../users/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



const login = async (req, res) => {
    console.log("entre al login");
    const user = await UserModel.search({
        email: req.body.email,
    })
    if (user) {
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
                const token = jwt.sign({user},process.env.TOKEN_SECRET);
                return res.json(token);
            } else {
                return res.status(401).json("wrong password")
            }
    }
    return res.status(400).json('Not found');
}






module.exports = {
    login
}