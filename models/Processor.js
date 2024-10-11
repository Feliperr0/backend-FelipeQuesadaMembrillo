import { Schema, model } from "mongoose";

let collection = 'processors'

let schema = new Schema({
    name: { type: String, required: true },
    cores: { type: Number, required: true },
    threads: { type: Number, required: true },
    baseClock: { type: Number, required: true },
    boostClock: { type: Number, required: true },
    manufacturer: { type: String, required: true },
    architecture: { type: String, required: true },
    socket: { type: String, required: true },
    powerConsumption: { type: Number, required: true },
    releaseDate: { type: Date, required: true }
}, {
    timestamps: true
});

let Processor = model(collection, schema);

export default Processor