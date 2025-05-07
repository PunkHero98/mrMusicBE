import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

const userController = {
  getAll: async (req, res) => {
    try {
      const users = await userModel.find({});
      if (!users) {
        return res.status(404).json({ message: "No users found" });
      }
      res
        .status(200)
        .json({
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

  create: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
      }
      const existingUser = await userModel.findOne({ email });
      console.log(existingUser);
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const hashPassword = await bcrypt.hash(password, 10);
      if (!hashPassword) {
        return res.status(400).json({ message: "Hash password failed" });
      }
      const user = userModel({
        username: username,
        email: email,
        password: hashPassword,
      });

      await user.save();
      if (!user) {
        return res.status(400).json({ message: "Create user failed" });
      }
      res
        .status(200)
        .json({
          message: "Create user successfully",
          user: user,
          success: true,
        });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default userController;
