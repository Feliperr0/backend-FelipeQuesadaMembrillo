import Tienda from "../../models/Tienda.js";

let crearTienda = async (req, res) => {
    try {
        let tienda = req.body
        let createTienda = await Tienda.create(tienda)
        return  res.status(201).json({
            response: createTienda
        });
    } catch (error) {
        next(error)
        
    }
}

let crearTiendas = async (req, res) => {
    try {
        let tiendas = req.body;
        let nuevasTiendas = await Tienda.insertMany(tiendas);
        return res.status(201).json({ response: nuevasTiendas });
    } catch (error) {
        next(error)
    }
}


export {crearTienda, crearTiendas}