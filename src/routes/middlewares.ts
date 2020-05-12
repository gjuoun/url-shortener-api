import { express } from "../app";

export function validateUrl(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (!req.body.originalUrl) {
    res.status(400);
    next(new Error("missing field: originalUrl"))

  } else if (!isValidUrl(req.body.originalUrl)) {
    res.status(400);
    next(new Error("originalUrl is not valid"))

  } else {
    next();
  }

}

function isValidUrl(url: string) {
  const urlRegExp = /^https?:\/\/(.+).*/i;
  return urlRegExp.test(url);
}
