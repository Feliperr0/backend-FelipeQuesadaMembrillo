import User from "../../models/User.js";

let create = async (req, res,next) => {
    try {
        let user = req.body
        let createUser = await User.create(user)
        return  res.status(201).json({
            response: createUser
        });
    } catch (error) {
        next(error)
        
    }
}


let createUsers = async (req, res) => {
    try {
        let user = req.body;
        let newUser = await User.insertMany(user);
        return res.status(201).json({ response: newUser });
    } catch (error) {
        next(error)
    }
}

export {create, createUsers}