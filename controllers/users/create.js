import User from "../../models/User.js";

let create = async (req, res) => {
    try {
        let user = req.body
        let createUser = await User.create(user)
        return  res.status(201).json({
            response: createUser
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
        
    }
}


export {create}