import Producto from "../../models/Producto.js";

let createProducto = async (req, res) => {
    try {
        let producto = req.body;
        let nuevoProducto = await Producto.create(producto);
        return res.status(201).json({ response: nuevoProducto });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
}




let createProductos = async (req, res) => {
    try {
        let productos = req.body;
        let nuevosProductos = await Producto.insertMany(productos);
        return res.status(201).json({ response: nuevosProductos });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
}



export { createProducto, createProductos };