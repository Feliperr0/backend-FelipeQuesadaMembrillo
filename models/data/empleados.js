

import "dotenv/config.js"
import '../../config/database.js'
import Empleado from '../Empleado.js'


let empleados = [
    { nombre: "Ana Gómez", cargo: "Gerente", salario: 50000 },
    { nombre: "Carlos Martínez", cargo: "Vendedor", salario: 30000 },
    { nombre: "Lucía Fernández", cargo: "Cajera", salario: 28000 },
    { nombre: "Juan Pérez", cargo: "Almacenista", salario: 27000 },
    { nombre: "María Rodríguez", cargo: "Atención al Cliente", salario: 29000 },
    { nombre: "Pedro Sánchez", cargo: "Supervisor", salario: 32000 },
    { nombre: "Laura Morales", cargo: "Auxiliar Administrativo", salario: 26000 },
    { nombre: "David Jiménez", cargo: "Vendedor", salario: 30000 },
    { nombre: "Sofía Torres", cargo: "Cajera", salario: 28000 },
    { nombre: "Luis Ramírez", cargo: "Almacenista", salario: 27000 },
    { nombre: "Elena Ruiz", cargo: "Atención al Cliente", salario: 29000 },
    { nombre: "Jorge Díaz", cargo: "Supervisor", salario: 32000 },
    { nombre: "Marta Silva", cargo: "Gerente", salario: 50000 },
    { nombre: "Héctor Vargas", cargo: "Vendedor", salario: 30000 },
    { nombre: "Isabel García", cargo: "Cajera", salario: 28000 },
    { nombre: "Francisco Romero", cargo: "Almacenista", salario: 27000 },
    { nombre: "Claudia Peña", cargo: "Atención al Cliente", salario: 29000 },
    { nombre: "Ricardo Navarro", cargo: "Supervisor", salario: 32000 },
    { nombre: "Valeria Ortiz", cargo: "Auxiliar Administrativo", salario: 26000 },
    { nombre: "Fernando Medina", cargo: "Vendedor", salario: 30000 }
];
Empleado.insertMany(empleados)
