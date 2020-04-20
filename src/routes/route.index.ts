import { Router } from "express";
import { saveToDb, validateUrl } from "./mid.urlShorten";
import { getOriginalUrl } from "./mid.getOrigin";

const route = Router();

route.get("/", validateUrl, saveToDb, (req, res) => {
  res.json(<App.SuccessMessage>{
    success: true,
    shortenedUrl: res.shortenedUrl,
  });
});

route.get("/:shortenedUrl", getOriginalUrl, (req, res) => {
  res.redirect(res.originalUrl);
});

export default route;
