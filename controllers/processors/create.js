import Procesador from "../../models/Procesador.js";


const crearProcesador = async (req, res) => {
    const processor = new Procesador(req.body);
    try {
      const newProcessor = await processor.save();
      res.status(201).json(newProcessor);
    } catch (error) {
      next(error)
  }
  };
  let crearProcesadores = async (req, res) => {
    try {
        let procesadores = req.body;
        let nuevosProcesadores = await Procesador.insertMany(procesadores);
        return res.status(201).json({ response: nuevosProcesadores });
    } catch (error) {
        next(error)
    }
}




  export {crearProcesador, crearProcesadores}