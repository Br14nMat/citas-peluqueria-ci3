import { object, string, array, z } from 'zod';
import mongoose from 'mongoose';

const isValidObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);

const hairdresserSchema = object({
    name: string({ required_error: "El nombre del peluquero es requerido" })
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    profile: string({ required_error: "El perfil es requerido" })
        .min(10, "El perfil debe tener al menos 10 caracteres"),
    availability: array(string(), { required_error: "La disponibilidad es requerida" }),
    appointments: z.optional(array(string().refine(isValidObjectId, { message: "Debe ser un ID de cita válido" })))
});

export default hairdresserSchema;