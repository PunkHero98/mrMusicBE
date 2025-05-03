import mongoose from 'mongoose';

const SessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sessionId: { type: String, required: true, unique: true },
  userAgent: { type: String }, // Tùy chọn: thông tin thiết bị
  ipAddress: { type: String }, // Tùy chọn: IP truy cập
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date }, // Tùy chọn: để set thời gian sống
}, { timestamps: true });

const sessionModel = mongoose.model('Session', SessionSchema);
export default sessionModel;
