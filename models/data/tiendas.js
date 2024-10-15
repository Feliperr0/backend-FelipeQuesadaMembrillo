
import "dotenv/config.js"
import '../../config/database.js'
import Tienda from '../Tienda.js'

let tiendas = [
    { nombre: "Puglet Supercenter CAN", direccion: "1600 N Main St", region: "America", pais: "Canada", codigoPostal: "64055", telefono: 8162522842 },
    { nombre: "Puglet SuperCenter MX", direccion: "345 Sower Blvd", region: "America", pais: "Mexico", codigoPostal: "40601", telefono: 5028755534 },
    { nombre: "Puglet Supercenter UK", direccion: "1775 E Idaho Ave", region: "Europe", pais: "UK", codigoPostal: "83301", telefono: 2087342136 },
    { nombre: "Puglet Supercenter AUS", direccion: "700 Keeaumoku St", region: "Oceania", pais: "Australia", codigoPostal: "96814", telefono: 8089558441 },
    { nombre: "Puglet Supercenter USA", direccion: "3750 E Flamingo Rd", region: "America", pais: "USA", codigoPostal: "89121", telefono: 7028980089 }
];
Tienda.insertMany(tiendas)