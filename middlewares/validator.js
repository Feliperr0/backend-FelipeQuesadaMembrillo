const validator = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.body, { abortEaly: false }) //valida el body del esquema, esta parte al encontrar el primer error permite que siga validando
        if (validation.error) {
            return res.status(400).json({
                succes: false,
                message: validation.error.details.map(error => error.message)
            })

        }
        return next()
    }
]

export default validator