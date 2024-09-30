import mongoose, { Schema, Document } from 'mongoose';

export interface BookingDocument extends Document {
    customer: mongoose.Schema.Types.ObjectId;
    service: mongoose.Schema.Types.ObjectId;
    date: Date;
    status: 'pending' | 'confirmed' | 'cancelled';
}

const bookingSchema = new Schema<BookingDocument>({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    date: { type: Date, required: true },
    status: { 
        type: String, 
        enum: ['pending', 'confirmed', 'cancelled'], 
        default: 'pending' 
    }
});

const Booking = mongoose.model<BookingDocument>('Booking', bookingSchema);
export default Booking;