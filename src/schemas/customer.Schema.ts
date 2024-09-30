import { object, string, array, optional } from 'zod';
import mongoose from 'mongoose';

const isValidObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);

const customerSchema = object({
    name: string({ required_error: "El nombre del cliente es requerido" })
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    email: string({ required_error: "El correo electrónico es requerido" })
        .email("No es una dirección de correo válida"),
    phone: string({ required_error: "El número de teléfono es requerido" })
        .min(7, "El número de teléfono debe tener al menos 7 caracteres"),
    preferences: optional(string()),
    reviews: optional(array(string().refine(isValidObjectId, { message: "Debe ser un ID de reseña válido" })))
});

export default customerSchema;