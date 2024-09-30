import { object, string } from 'zod';

const adminSchema = object({
    username: string({ required_error: "El nombre de usuario es requerido" })
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres"),
    email: string({ required_error: "El correo electrónico es requerido" })
        .email("No es una dirección de correo válida"),
    password: string({ required_error: "La contraseña es requerida" })
        .min(8, "La contraseña debe tener al menos 8 caracteres")
});

export default adminSchema;