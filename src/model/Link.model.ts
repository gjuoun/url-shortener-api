import { mongoose } from "../app";

export interface Link extends mongoose.Document {
  _id: string;
  shortenedUrl: string;
  originalUrl: string;
  fromIp: string;
  timestamp: string;
}

const Link = new mongoose.Schema({
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
  timestamp: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<Link>("link", Link);
