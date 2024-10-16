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


export {createEmpleado}