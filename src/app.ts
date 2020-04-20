import dotenv from "dotenv";
if (process.env.NODE_ENV !== "prod") {
  dotenv.config();
}
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import route from "./routes/route.index";

const app = express();
const HOST_HREF = "http://" + process.env.DOMAIN || "localhost";

mongoose.connect(process.env.MONGO_CONN!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use("/", route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running on " + PORT);
});

export { express, mongoose, HOST_HREF };
