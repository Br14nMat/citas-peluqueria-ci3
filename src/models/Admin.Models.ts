import mongoose, { Schema, Document } from 'mongoose';

export interface AdminDocument extends Document {
    username: string;
    email: string;
    password: string;
}

const adminSchema = new Schema<AdminDocument>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const Admin = mongoose.model<AdminDocument>('Admin', adminSchema);
export default Admin;