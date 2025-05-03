import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatarUrl: { type: String },
  bio: { type: String },
  isArtist: { type: Boolean, default: false }, // check nếu là Artist
  role: {
    type: String,
    enum: ['user', 'artist', 'admin'],
    default: 'user', // mặc định là user, có thể là artist hoặc admin
  },
  sessionId: { type: String, default: null },
}, { timestamps: true });

const userModel = mongoose.model('User', UserSchema);
export default userModel;