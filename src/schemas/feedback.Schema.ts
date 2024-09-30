import { object, string, number, optional } from 'zod';
import mongoose from 'mongoose';

const isValidObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);

const feedbackSchema = object({
    customer: string({ required_error: "El ID del cliente es requerido" })
        .refine(isValidObjectId, { message: "Debe ser un ID de cliente válido" }),
    hairdresser: string({ required_error: "El ID del peluquero es requerido" })
        .refine(isValidObjectId, { message: "Debe ser un ID de peluquero válido" }),
    rating: number({ required_error: "La calificación es requerida" })
        .min(1, "La calificación debe ser al menos 1")
        .max(5, "La calificación debe ser como máximo 5"),
    comment: string({ required_error: "El comentario es requerido" })
        .min(5, "El comentario debe tener al menos 5 caracteres"),
    response: optional(string())
});

export default feedbackSchema;