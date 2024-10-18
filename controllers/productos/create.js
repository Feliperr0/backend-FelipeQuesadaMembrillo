import Producto from "../../models/Producto.js";

let crearProducto = async (req, res) => {
    try {
        let producto = req.body;
        let nuevoProducto = await Producto.create(producto);
        return res.status(201).json({ response: nuevoProducto });
    } catch (error) {
        next(error)
    }
}




let crearProductos = async (req, res) => {
    try {
        let productos = req.body;
        let nuevosProductos = await Producto.insertMany(productos);
        return res.status(201).json({ response: nuevosProductos });
    } catch (error) {
        next(error)
    }
}



export { crearProducto, crearProductos };