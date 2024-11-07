import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required().regex(/^[a-zA-Z ]+$/).min(3).max(30).messages({
        'any.required': 'El nombre es un campo requerido',
        'string.empty': 'El nombre no debe estar vacío',
        'string.pattern.base': 'El nombre solo debe contener letras y espacios',
        'string.min': 'El nombre debe tener al menos 3 caracteres',
        'string.max': 'El nombre no debe exceder los 30 caracteres'
    }),
    email: joi.string().required().email().messages({
        'any.required': 'El email es un campo requerido',
        'string.empty': 'El email no debe estar vacío',
        'string.email': 'Debe ser un email válido'
    }),
    password: joi.string().required().min(8).max(30).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{8,30}$')).messages({
        'any.required': 'La contraseña es un campo requerido',
        'string.empty': 'La contraseña no debe estar vacía',
        'string.min': 'La contraseña debe tener al menos 8 caracteres',
        'string.max': 'La contraseña no debe exceder los 30 caracteres',
        'string.pattern.base': 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
    }),
    role: joi.number().required().min(1).max(5).messages({
        'any.required': 'El rol es un campo requerido',
        'number.empty': 'El rol no debe estar vacío',
        'number.base': 'El rol debe ser un número',
        'number.min': 'El valor mínimo para el rol es 1',
        'number.max': 'El valor máximo para el rol es 5'
    }),
    photo: joi.string().required().uri().messages({
        'any.required': 'La foto es un campo requerido',
        'string.empty': 'La URL de la foto no debe estar vacía',
        'string.uri': 'Debe ser una URL válida'
    })
});

export default schema;
