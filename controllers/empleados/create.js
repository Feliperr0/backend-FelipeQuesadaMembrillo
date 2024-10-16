import Empleado from "../../models/Empleado.js";

let createEmpleado = async (req, res) => {
    try {
        let empleado = req.body
        let createEmpleado = await Empleado.create(empleado)
        return  res.status(201).json({
            response: createEmpleado
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
        
    }
}

let createEmpleados = async (req, res) => {
    try {
        let empleados = req.body;
        let nuevosEmpleados = await Empleado.insertMany(empleados);
        return res.status(201).json({ response: nuevosEmpleados });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
}



export {createEmpleado, createEmpleados}