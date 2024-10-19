import Procesador from "../../models/Procesador.js";


 const todosLosProcesadores = async (req, res) => {
  try {
    const processors = await Processor.find();
    res.status(200).json(processors);
  } catch (error) {
    next(error)
}
};








export { todosLosProcesadores } 