import mongoose, { Schema, Document } from 'mongoose';

export interface FeedbackDocument extends Document {
    customer: mongoose.Schema.Types.ObjectId;
    hairdresser: mongoose.Schema.Types.ObjectId;
    rating: number;
    comment: string;
    response?: string;
}

const feedbackSchema = new Schema<FeedbackDocument>({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    hairdresser: { type: Schema.Types.ObjectId, ref: 'Hairdresser', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    response: { type: String }
});

const Feedback = mongoose.model<FeedbackDocument>('Feedback', feedbackSchema);
export default Feedback;