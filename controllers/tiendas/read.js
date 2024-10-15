import Tienda from "../../models/Tienda.js";

// Obtener todas las tiendas
let todasLasTiendas = async (req, res) => {
    try {
        let all = await Tienda.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

// Obtener tiendas por región
let TiendaPorRegion = async (req, res) => {
    try {
        let regionQuery = req.params.region;
        let all = await Tienda.find({ region: regionQuery });
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

// Obtener tiendas por país
let TiendaPorPais = async (req, res) => {
    try {
        let paisQuery = req.params.pais;
        let all = await Tienda.find({ pais: paisQuery });
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

export { todasLasTiendas, TiendaPorRegion, TiendaPorPais };