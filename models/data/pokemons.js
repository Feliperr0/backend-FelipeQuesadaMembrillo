

import "dotenv/config.js"
import '../../config/database.js'
import Pokemon from '../Pokemon.js'


let pokemons = [
    { name: "Pikachu", type: "Electric", level: 15, height: 0.4, weight: 6, abilities: ["Static", "Lightning Rod"], baseExperience: 112, habitat: "Forest", region: "Kanto", evolutions: ["Raichu"] },
    { name: "Charmander", type: "Fire", level: 12, height: 0.6, weight: 8.5, abilities: ["Blaze", "Solar Power"], baseExperience: 62, habitat: "Mountain", region: "Kanto", evolutions: ["Charmeleon", "Charizard"] },
    { name: "Bulbasaur", type: "Grass/Poison", level: 10, height: 0.7, weight: 6.9, abilities: ["Overgrow", "Chlorophyll"], baseExperience: 64, habitat: "Grassland", region: "Kanto", evolutions: ["Ivysaur", "Venusaur"] },
    { name: "Squirtle", type: "Water", level: 14, height: 0.5, weight: 9, abilities: ["Torrent", "Rain Dish"], baseExperience: 63, habitat: "Waters Edge", region: "Kanto", evolutions: ["Wartortle", "Blastoise"] },
    { name: "Jigglypuff", type: "Fairy", level: 8, height: 0.5, weight: 5.5, abilities: ["Cute Charm", "Competitive"], baseExperience: 95, habitat: "Cave", region: "Kanto", evolutions: ["Wigglytuff"] },
    { name: "Meowth", type: "Normal", level: 11, height: 0.4, weight: 4.2, abilities: ["Pickup", "Technician"], baseExperience: 58, habitat: "Urban", region: "Kanto", evolutions: ["Persian"] },
    { name: "Psyduck", type: "Water", level: 13, height: 0.8, weight: 19.6, abilities: ["Damp", "Cloud Nine"], baseExperience: 64, habitat: "Waters Edge", region: "Kanto", evolutions: ["Golduck"] },
    { name: "Machop", type: "Fighting", level: 16, height: 0.8, weight: 19.5, abilities: ["Guts", "No Guard"], baseExperience: 61, habitat: "Mountain", region: "Kanto", evolutions: ["Machoke", "Machamp"] },
    { name: "Magnemite", type: "Electric/Steel", level: 9, height: 0.3, weight: 6, abilities: ["Magnet Pull", "Sturdy"], baseExperience: 65, habitat: "Rough Terrain", region: "Kanto", evolutions: ["Magneton", "Magnezone"] },
    { name: "Geodude", type: "Rock/Ground", level: 7, height: 0.4, weight: 20, abilities: ["Rock Head", "Sturdy"], baseExperience: 60, habitat: "Mountain", region: "Kanto", evolutions: ["Graveler", "Golem"] }
  ];

Pokemon.insertMany(pokemons)