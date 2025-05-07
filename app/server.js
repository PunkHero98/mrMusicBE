import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 8082;

(async () => {
    await connectDB();
  
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })();
