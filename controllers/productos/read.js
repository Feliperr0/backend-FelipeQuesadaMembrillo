import Producto from "../../models/Producto.js";

// Obtener todos los productos
let todosLosProductos = async (req, res) => {
    try {
        let all = await Producto.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

// Obtener productos por tipo
let productoPorTipo = async (req, res) => {
    try {
        let tipoQuery = req.params.tipo.toLowerCase();
        let all = await Producto.find({ tipo: { $regex: new RegExp(tipoQuery, 'i') } });
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

// Obtener productos por marca
let productoPorMarca = async (req, res) => {
    try {
        let marcaQuery = req.params.marca.toLowerCase();
        let all = await Producto.find({ marca: { $regex: new RegExp(marcaQuery, 'i') } });
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};


// Ordenar productos por precio (de mayor a menor)
let productosOrdenMayorAMenor = async (req, res) => {
    try {
        let all = await Producto.find().sort({ precio: -1 });
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

// Ordenar productos por precio (de menor a mayor)
let productosOrdenMenorAMayor = async (req, res) => {
    try {
        let all = await Producto.find().sort({ precio: 1 });
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

export { todosLosProductos, productoPorTipo, productoPorMarca, productosOrdenMayorAMenor, productosOrdenMenorAMayor };
