import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const authController = {
  register: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const user = await userModel.create({
        username,
        email,
        password,
      });

      if (!user) {
        return res.status(400).json({ message: "Create user failed" });
      }
      res.status(200).json({
        message: "Create user successfully",
        user: { _id: user.id, username: user.username, email: user.email },
        success: true,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  login: async (req, res) => {
    try {
      const user = req.user;
      const accessToken = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: process.env.JWT_EXPIRE_TIME,
        }
      );
      res.status(200).json({
        message: "Login successfully",
        user: {
          accessToken,
        },
        success: true,
      });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getCurrentUser: async (req, res) => {
    const currentUser = req.user;
    try {
      if (currentUser) {
        res.status(200).json({
          message: "Get current user successfully",
          currentUser,
        });
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default authController;
