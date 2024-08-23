const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://amrendra001122:bFl9gwpbgOBm8iXR@cluster0.gomjb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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
