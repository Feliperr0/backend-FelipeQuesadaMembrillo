import Tienda from "../../models/Tienda.js";

let createTienda = async (req, res) => {
    try {
        let tienda = req.body
        let createTienda = await Tienda.create(tienda)
        return  res.status(201).json({
            response: createTienda
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
        
    }
}


export {createTienda}