import dotenv from "dotenv";
if (process.env.NODE_ENV !== "prod") {
  dotenv.config();
}
import express, { NextFunction } from "express";
import bodyParser from "body-parser";
import route from "./routes/index";
import { ApiResponse } from "types";

const app = express();
const DOMAIN = "http://" + process.env.DOMAIN || "localhost";

app.use(bodyParser.json());

app.use("/", route);

/* ----------------------------- Success handler ---------------------------- */
app.use('*', (req, res) => {
  if (res.data) {
    res.send(<ApiResponse>{
      success: true,
      data: res.data
    })
  } else {
    res.send(<ApiResponse>{
      success: false,
      message: "endpoint: /generate, /:shortenedUrl"
    })
  }
})


/* ------------------------------ Error handler ----------------------------- */
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(err)

  res.send(<ApiResponse>{
    success: false,
    message: err.message
  })
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Running on " + PORT);
});

export { express, DOMAIN };
