import mongoose from "mongoose";

const PlaylistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    name: { type: String, required: true },
    description: { type: String },
    coverImageUrl: { type: String },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'songs' }]
    }, { timestamps: true });

const playListModel = mongoose.model('playlists', PlaylistSchema);
export default playListModel;