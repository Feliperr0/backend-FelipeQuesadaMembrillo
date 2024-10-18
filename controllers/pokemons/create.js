import Pokemon from "../../models/Pokemon.js";

let crearPokemon = async (req, res) => {
    try {
        let pokemon = req.body;
        let nuevoPokemon = await Pokemon.create(pokemon);
        return res.status(201).json({ response: nuevoPokemon });
    } catch (error) {
        next(error)

    }
};


let crearPokemons = async (req, res) => {
    try {
        let pokemons = req.body;
        let nuevosPokemons = await Pokemon.insertMany(pokemons);
        return res.status(201).json({ response: nuevosPokemons });
    } catch (error) {
        next(error)

    }
};



export { crearPokemon, crearPokemons };