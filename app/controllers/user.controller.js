import userModel from "../models/user.model.js";

const userController = {
  getAll: async (req, res) => {
    try {
      const users = await userModel.find({});
      if (!users) {
        return res.status(404).json({ message: "No users found" });
      }
      res.status(200).json({
        message: "Get list user successfully",
        users: users,
        success: true,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res
        .status(200)
        .json({ message: "Get user successfully", user: user, success: true });
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default userController;
