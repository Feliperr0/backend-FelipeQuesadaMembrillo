import Empleado from "../../models/Empleado.js";

let todosLosEmpleados = async (req, res) => {
    try {
        let all = await Empleado.find();
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

let empleadosSalarioBajo = async (req, res) => {
    try {
        let all = await Empleado.find({ salario: { $gte: 0, $lt: 30000 } });
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

let empleadosSalarioAlto = async (req, res) => {
    try {
        let all = await Empleado.find({ salario: { $gte: 30000, $lt: 50000 } });
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

let empleadoPorCargo = async (req, res) => {
    try {
        let cargoQuery = req.params.cargo.toLowerCase();
        let all = await Empleado.find({ cargo: { $regex: new RegExp(cargoQuery, 'i') } });
        return res.status(200).json({ response: all });
    } catch (error) {
        return res.status(500).json({ response: error.message });
    }
};

export { empleadosSalarioAlto, empleadosSalarioBajo, empleadoPorCargo, todosLosEmpleados }