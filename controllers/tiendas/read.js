import Tienda from "../../models/Tienda.js";


let todasLasTiendas = async (req, res, next) => {
    try {
        let all = await Tienda.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)
    }
};

let TiendaPorRegion = async (req, res, next) => {
    try {
        let regionQuery = req.params.region;
        let all = await Tienda.find({ region: regionQuery });
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)
    }
};


let TiendaPorPais = async (req, res, next) => {
    try {
        let paisQuery = req.params.pais;
        let all = await Tienda.find({ pais: paisQuery });
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)
    }
};

export { todasLasTiendas, TiendaPorRegion, TiendaPorPais };