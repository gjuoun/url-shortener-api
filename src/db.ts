import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_CONN!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  console.error("MongoDB connection failed.");
});

db.once("open", () => {
  console.info("Connected to MongoDB");
});

export { mongoose };
