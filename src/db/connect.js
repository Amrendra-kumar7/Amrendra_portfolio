const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/amrendra?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB successfully!");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});