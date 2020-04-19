import { nanoid } from "nanoid";
import express from "express";
import bodyParser from "body-parser";

const app = express();

interface Link {
  _id: string;
  originalUrl: string;
  fromIp: string;
  timestamp: number;
}

const links: Link[] = [];
app.use(bodyParser.json());

app.get("/", (req, res) => {
  if (!req.body.originalUrl) {
    res.status(500);
    return res.send({ success: false, message: "originalUrl is needed" });
  } else if (!isValidUrl(req.body.originalUrl)) {
    res.status(500);
    return res.send({ success: false, messgage: "Url is not valid" });
  }

  const fromIp =
    req.headers["x-forwarded-for"] ?? req.connection.remoteAddress!;

  const _id = nanoid(10);
  const link: Link = {
    _id,
    originalUrl: req.body.originalUrl,
    fromIp: <string>fromIp ?? "",
    timestamp: Math.trunc(Date.now() / 1000),
  };

  links.push(link);
  console.log(links);
  res.json({ success: true, link: "http://localhost/" + _id });
});

function isValidUrl(url: string) {
  const urlRegExp = /^https?:\/\/(.+).*/i;
  return urlRegExp.test(url);
}

app.listen(3000, () => {
  console.log("Running on 3000");
});
