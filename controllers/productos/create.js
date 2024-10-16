import Producto from "../../models/Producto.js";

let createProducto = async (req, res) => {
    try {
        let producto = req.body
        let createProducto = await Producto.create(producto)
        return  res.status(201).json({
            response: createProducto
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
        
    }
}


export {createProducto}