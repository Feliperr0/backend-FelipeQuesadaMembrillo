import Pokemon from "../../models/Pokemon.js";


let todosLosPokemons = async (req, res, next) => {
    try {
        let all = await Pokemon.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)

    }
};

let pokemonPorTipo = async (req, res, next) => {
    try {
        let tipoQuery = req.params.tipo.toLowerCase();
        let all = await Pokemon.find({ type: { $regex: new RegExp(tipoQuery, 'i') } });
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)

    }
};

let pokemonPorHabitat= async (req, res, next) => {
    try {
        let habitatQuery = req.params.habitat.toLowerCase();
        let all = await Pokemon.find({ habitat: { $regex: new RegExp(habitatQuery, 'i') } });
        return res.status(200).json({ response: all });
    } catch (error) {
        next(error)

    }
};


export { todosLosPokemons, pokemonPorTipo, pokemonPorHabitat};