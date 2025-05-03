import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    songId: { type: mongoose.Schema.Types.ObjectId, ref: 'songs', required: true },
    content: { type: String, required: true }
    }, { timestamps: true });

const commentModel = mongoose.model('comments', CommentSchema);
export default commentModel;
