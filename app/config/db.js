import mongoose from "mongoose";

const connectDB = async () => {
    try {
      const conn = await mongoose.connect('mongodb+srv://huylam:w0DYKbkcwDv0JPun@cluster0.qr3xb6e.mongodb.net/finalProject');
  
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error('❌ MongoDB connection error:', error.message);
      process.exit(1);
    }
  };

export default connectDB;