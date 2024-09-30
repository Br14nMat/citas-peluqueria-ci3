import { object, string, date, z } from 'zod';
import mongoose from 'mongoose';

const isValidObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);

const bookingSchema = object({
    customer: string({ required_error: "El ID del cliente es requerido" })
        .refine(isValidObjectId, { message: "Debe ser un ID de cliente válido" }),
    service: string({ required_error: "El ID del servicio es requerido" })
        .refine(isValidObjectId, { message: "Debe ser un ID de servicio válido" }),
    date: date({ required_error: "La fecha es requerida" }),
    status: z.enum(['pending', 'confirmed', 'cancelled'], { required_error: "El estado es requerido" })
});

export default bookingSchema;