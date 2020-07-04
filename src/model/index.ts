import { mongoose } from "../db";
import {ShortenedUrl} from '../types'
export interface Link extends mongoose.Document, ShortenedUrl {
  _id: string;
  shortenedUrl :string,
  originalUrl: string
}

const LinkModel = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  shortenedUrl: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  fromIp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<Link>("link", LinkModel);
