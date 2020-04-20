import { nanoid } from "nanoid";
import Link from "../model/Link.model";
import { HOST_HREF, express } from "../app";
import { Validation } from "../validation";

async function saveToDb(
  req: express.Request,
  res: express.Response,
  next: Function
) {
  // shortenedUrl: http://localhost/abcdefghij
  const _id = nanoid(10);
  const newLink = new Link({
    _id,
    shortenedUrl: `${HOST_HREF}/${_id}`,
    originalUrl: req.body.originalUrl,
    fromIp:
      <string>req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress! ||
      "",
    timestamp: Math.trunc(Date.now() / 1000),
  });
  await newLink.save();
  // links.push(link);

  res.shortenedUrl = newLink.shortenedUrl;
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
  if (!Validation.isValidUrl(req.body.originalUrl)) {
    res.status(500);
    return res.send(<App.ErrorMessage>{
      success: false,
      errMessage: "Url is not valid",
    });
  }

  next();
}

export { saveToDb, validateUrl };
