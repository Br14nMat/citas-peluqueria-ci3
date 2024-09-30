import mongoose, { Schema, Document } from 'mongoose';

export interface HairdresserDocument extends Document {
    name: string;
    profile: string;
    availability: string[];
}

const hairdresserSchema = new Schema<HairdresserDocument>({
    name: { type: String, required: true },
    profile: { type: String, required: true },
    availability: [{ type: String }] // List of available times/days
});

const Hairdresser = mongoose.model<HairdresserDocument>('Hairdresser', hairdresserSchema);
export default Hairdresser;