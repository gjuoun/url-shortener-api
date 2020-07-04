import { nanoid } from "nanoid";
import LinkModel, {Link } from "../model";
import { DOMAIN } from "../app";
import { Router } from "express";
import { validateUrl } from "./middlewares";

const route = Router();

// return original url information
route.get("/:shortenedUrl", async (req, res, next) => {
  if (req.params.shortenedUrl) {
    const link = await LinkModel.findById(req.params.shortenedUrl);

    if (link) {
      res.redirect(link.originalUrl)
      
    } else {
      res.status(404)
      next(new Error("this url doesn't exist"))
    }

  } else {
    res.status(400)
    next(new Error("No shortened url is provided"))
  }
});

// generate a new shortened Url
route.post("/generate", validateUrl, async (req, res, next) => {
  const _id = nanoid(10);
  const newLink = new LinkModel({
    _id,
    shortenedUrl: `${DOMAIN}/${_id}`,
    originalUrl: req.body.originalUrl,
    fromIp: req.ip || "",
    createdAt: Math.trunc(Date.now() / 1000),
  });
  await newLink.save();
  res.data = newLink;
  next();
});




export default route;
