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

let createTiendas = async (req, res) => {
    try {
        let tiendas = req.body;
        let nuevasTiendas = await Tienda.insertMany(tiendas);
        return res.status(201).json({ response: nuevasTiendas });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
}


export {createTienda, createTiendas}