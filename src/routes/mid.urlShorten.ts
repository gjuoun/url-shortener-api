import { nanoid } from "nanoid";
import Link from "../model/Link.model";
import { HOST_HREF, express } from "../app";

import * as vali from "../validation";

async function saveToDb(
  req: express.Request,
  res: express.Response,
  next: Function
) {
  const fromIp =
    req.headers["x-forwarded-for"] ?? req.connection.remoteAddress!;

  const _id = nanoid(10);
  const shortenedUrl = `${HOST_HREF}/${_id}`;
  const linkModel = new Link({
    _id,
    shortenedUrl: shortenedUrl,
    originalUrl: req.body.originalUrl,
    fromIp: <string>fromIp || "",
    timestamp: Math.trunc(Date.now() / 1000),
  });
  await linkModel.save();
  // links.push(link);
  res.shortenedUrl = shortenedUrl;
  next();
}

function validateUrl(
  req: express.Request,
  res: express.Response,
  next: Function
) {
  if (!req.body.originalUrl) {
    res.status(500);
    return res.send(<App.ErrorMessage>{
      success: false,
      errMessage: "originalUrl is needed",
    });
  }
  if (!vali.Validation.isValidUrl(req.body.originalUrl)) {
    res.status(500);
    return res.send(<App.ErrorMessage>{
      success: false,
      errMessage: "Url is not valid",
    });
  }

  next();
}

export { saveToDb, validateUrl };
