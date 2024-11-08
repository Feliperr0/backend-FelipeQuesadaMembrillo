import Empleado from "../../models/Empleado.js";

let crearEmpleado = async (req, res, next) => {
    try {
        let empleado = req.body
        let crearEmpleado = await Empleado.create(empleado)
        return  res.status(201).json({
            response: crearEmpleado
        });
    } catch (error) {
        next(error)
        
    }
}

let crearEmpleados = async (req, res, next) => {
    try {
        let empleados = req.body;
        let nuevosEmpleados = await Empleado.insertMany(empleados);
        return res.status(201).json({ response: nuevosEmpleados });
    } catch (error) {
        next(error)
    }
}



export {crearEmpleado, crearEmpleados}