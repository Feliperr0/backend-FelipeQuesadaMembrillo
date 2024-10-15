import { Schema, model } from "mongoose";

let collection = 'tiendas';

let schema = new Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    region: { type: String, required: true },
    pais: { type: String, required: true },
    codigoPostal:{type: Number, required: true},
    telefono: { type: Number, required: true }
}, {
    timestamps: true
});

let Tienda = model(collection, schema);

export default Tienda;