import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    songId: { type: mongoose.Schema.Types.ObjectId, ref: 'songs', required: true },
    }, { timestamps: true });

const likeModel = mongoose.model('likes', LikeSchema);
export default likeModel;