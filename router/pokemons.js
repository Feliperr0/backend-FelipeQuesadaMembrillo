import { Router } from "express";
import {todosLosPokemons,pokemonPorTipo, pokemonPorHabitat} from "../controllers/pokemons/read.js";
import {crearPokemon,crearPokemons  } from "../controllers/pokemons/create.js";



const router = Router();


router.get('/all', todosLosPokemons);

router.get('/tipo/:tipo', pokemonPorTipo);

router.get('/habitat/:habitat',pokemonPorHabitat );

router.post('/crearpokemon', crearPokemon)

router.post('/crearpokemons',crearPokemons)




export default router