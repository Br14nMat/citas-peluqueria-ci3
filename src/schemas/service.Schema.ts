import { object, string, number } from 'zod';

const serviceSchema = object({
    name: string({ required_error: "El nombre del servicio es requerido" })
        .min(3, "El nombre del servicio debe tener al menos 3 caracteres"),
    type: string({ required_error: "El tipo de servicio es requerido" })
        .min(3, "El tipo de servicio debe tener al menos 3 caracteres"),
    price: number({ required_error: "El precio es requerido" })
        .positive("El precio debe ser un número positivo"),
    duration: number({ required_error: "La duración es requerida" })
        .positive("La duración debe ser un número positivo")
});

export default serviceSchema;