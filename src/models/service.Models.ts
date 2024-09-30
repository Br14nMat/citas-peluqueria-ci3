import mongoose, { Schema, Document } from 'mongoose';

export interface ServiceDocument extends Document {
    name: string;
    type: string;
    price: number;
    duration: number; // In minutes
}

const serviceSchema = new Schema<ServiceDocument>({
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true } // Duration in minutes
});

const Service = mongoose.model<ServiceDocument>('Service', serviceSchema);
export default Service;