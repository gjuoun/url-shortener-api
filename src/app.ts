import dotenv from "dotenv";
if (process.env.NODE_ENV !== "prod") {
  dotenv.config();
}
import express from "express";
import bodyParser from "body-parser";
import route from "./routes/route.index";

const app = express();
const HOST_HREF = "http://" + process.env.DOMAIN || "localhost";

app.use(bodyParser.json());

app.use("/", route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running on " + PORT);
});

export { express, HOST_HREF };
