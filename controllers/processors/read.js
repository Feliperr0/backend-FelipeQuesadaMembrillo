import Procesador from "../../models/Procesador.js";


 const todosLosProcesadores = async (req, res, next) => {
  try {
    const processors = await Procesador.find();
    res.status(200).json(processors);
  } catch (error) {
    next(error)
}
};








export { todosLosProcesadores } 