const validar_campos = (campos) => {
    return (req, res, next) => {
        let camposFaltantes = campos.filter(campo => !req.body[campo]);
        console.log(camposFaltantes)

        if (camposFaltantes.length > 0) {
            console.log(`
            **Control**
            Campos faltantes: ${camposFaltantes.join(', ')}
            Ruta: ${req.originalUrl}
            Método: ${req.method}    
            `);

            return res.status(400).json({
                success: false,
                message: `Faltan los campos obligatorios: ${camposFaltantes.join(', ')}.`
            });
        }
        next();
    };
};
export default validar_campos