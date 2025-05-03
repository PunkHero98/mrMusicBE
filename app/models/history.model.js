import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    songId: { type: mongoose.Schema.Types.ObjectId, ref: 'songs', required: true },
    listenedAt: { type: Date, default: Date.now }
  });

const HistoryModel = mongoose.model('histories', HistorySchema);
export default HistoryModel;