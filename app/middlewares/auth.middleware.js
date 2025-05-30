import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const validateRegister = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Interal server error", error: err.message });
  }
};

const validateLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

const verifyUserCredentials = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const existUser = await userModel.findOne({ username }).select("+password");

    if (!existUser) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await existUser.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    req.user = existUser;
    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

const protect = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  try {
    if (token && token.startsWith("Bearer")) {
      const accessToken = token.split(" ")[1];

      const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

      const currentUser = await userModel.findById(decoded.id);

      if (!currentUser) {
        return res.status(401).json({ message: "Unauthorized access" });
      }

      req.user = currentUser;
      next();
    } else {
      return res
        .status(401)
        .json({ message: "Unauthorized access, token not provided" });
    }
  } catch (error) {
    console.error("Error in protect middleware:", error);
    if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ message: "Unauthorized access, invalid token" });
    }
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Unauthorized access, token expired" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

export { validateRegister, validateLogin, verifyUserCredentials, protect };
