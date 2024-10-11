import { Schema, model } from "mongoose";

let collection = 'pokemons'

let schema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    level: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    abilities: { type: [String], required: true },
    baseExperience: { type: Number, required: true },
    habitat: { type: String, required: true },
    region: { type: String, required: true },
    evolutions: { type: [String], required: true }
}, {
    timestamps: true
});

let Pokemon = model(collection, schema);

export default Pokemon