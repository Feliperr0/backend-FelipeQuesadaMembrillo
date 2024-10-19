import Producto from "../../models/Producto.js";


let todosLosProductos = async (req, res, next) => {
    try {
        let all = await Producto.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)
    }
};

let productoPorTipo = async (req, res, next) => {
    try {
        let tipoQuery = req.params.tipo.toLowerCase(); //vamos a normalizar el texto
        let all = await Producto.find({ tipo: { $regex: new RegExp(tipoQuery, 'i') } }); //ahora con esta funcion de mongo
        return res.status(200).json({ response: all });                               //vamos a buscar valores que coincidan
    } catch (error) {
        next(error)
    }
};

let productoPorMarca = async (req, res, next) => {
    try {
        let marcaQuery = req.params.marca.toLowerCase();
        let all = await Producto.find({ marca: { $regex: new RegExp(marcaQuery, 'i') } }); //funcionalidades de mongo
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)
    }
};


let productosOrdenMayorAMenor = async (req, res, next) => {
    try {
        let all = await Producto.find().sort({ precio: -1 });
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)
    }
};


let productosOrdenMenorAMayor = async (req, res, next) => {
    try {
        let all = await Producto.find().sort({ precio: 1 });
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)
    }
};

export { todosLosProductos, productoPorTipo, productoPorMarca, productosOrdenMayorAMenor, productosOrdenMenorAMayor };
