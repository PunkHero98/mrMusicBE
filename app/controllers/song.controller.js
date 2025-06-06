import songModel from "../models/song.model.js";

const songController = {
  getAll: async (req, res) => {
    try {
      console.log("Fetching all songs...");
      const songs = await songModel.find({});
      if (!songs || songs.length === 0) {
        return res.status(404).json({ message: "No songs found" });
      }
      res.status(200).json({
        message: "Get list of songs successfully",
        songs: songs,
        success: true,
      });
    } catch (error) {
      console.error("Error fetching songs:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  //   getById: async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       if (!mongoose.Types.ObjectId.isValid(id)) {
  //         return res.status(400).json({ error: "Invalid song ID" });
  //       }
  //       const song = await songModel
  //         .findById(id)
  //         .populate("userId", "username email");
  //       if (!song) {
  //         return res.status(404).json({ message: "Song not found" });
  //       }
  //       res.status(200).json({
  //         message: "Get song successfully",
  //         song: song,
  //         success: true,
  //       });
  //     } catch (error) {
  //       console.error("Error fetching song by ID:", error);
  //       res.status(500).json({ message: "Internal server error" });
  //     }
  //   },
};

export default songController;
