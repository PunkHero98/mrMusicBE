import mongoose from "mongoose";

const FollowSchema = new mongoose.Schema({
    followerId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    followingId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    }, { timestamps: true });

const followModel = mongoose.model('follows', FollowSchema);
export default followModel;