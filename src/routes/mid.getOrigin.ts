import { HOST_HREF, express } from "../app";
import Link from "../model/Link.model";

async function getOriginalUrl(
  req: express.Request,
  res: express.Response,
  next: Function
) {
  if (!req.params.shortenedUrl) {
    return res.json(<App.ErrorMessage>{
      success: false,
      errMessage: "No shortened url is provided",
    });
  }

  const link = await Link.findById(req.params.shortenedUrl);

  if (!link) {
    return res.redirect(HOST_HREF);
  }

  res.originalUrl = link.originalUrl;
  next();
}

export { getOriginalUrl };
