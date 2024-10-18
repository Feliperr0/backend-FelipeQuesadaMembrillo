import { Router } from "express";
import {todosLosPokemons,pokemonPorTipo, pokemonPorHabitat} from "../controllers/pokemons/read.js";
import {crearPokemon,crearPokemons  } from "../controllers/pokemons/create.js";
import validar_campos from "../middlewares/validar_campos.js";


const router = Router();


router.get('/all', todosLosPokemons);

router.get('/tipo/:tipo', pokemonPorTipo);

router.get('/habitat/:habitat',pokemonPorHabitat );

router.post('/crearpokemon', validar_campos(['name', 'type', 'level', 'height', 'weight', 'abilities', 'baseExperience', 'habitat', 'region', 'evolutions']), crearPokemon)

router.post('/crearpokemons', validar_campos(['name', 'type', 'level', 'height', 'weight', 'abilities', 'baseExperience', 'habitat', 'region', 'evolutions']),crearPokemons)




export default router