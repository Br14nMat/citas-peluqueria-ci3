import mongoose, { Schema, Document } from 'mongoose';

export interface CustomerDocument extends Document {
    name: string;
    email: string;
    phone: string;
    preferences?: string;
    reviews?: string[];
}

const customerSchema = new Schema<CustomerDocument>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    preferences: { type: String },
    reviews: [{ type: String }]
});

const Customer = mongoose.model<CustomerDocument>('Customer', customerSchema);
export default Customer;