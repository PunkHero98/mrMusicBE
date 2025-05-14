import userModel from "../models/user.model.js";

const authController = {
  signup: async (req, res) => {
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
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
      }
      const existUser = await userModel
        .findOne({ username })
        .select("+password");
      if (!existUser) {
        return res.status(400).json({ message: "User not found" });
      }
      const isMatch = await existUser.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
      res.status(200).json({
        message: "Login successfully",
        user: existUser,
        success: true,
      });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default authController;
