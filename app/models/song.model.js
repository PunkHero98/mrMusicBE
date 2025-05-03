import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    title: { type: String, required: true },
    description: { type: String },
    audioUrl: { type: String, required: true },
    coverImageUrl: { type: String },
    genre: { type: String },
    playCount: { type: Number, default: 0 },
    }, { timestamps: true });

const songModel = mongoose.model('songs', SongSchema);
export default songModel;