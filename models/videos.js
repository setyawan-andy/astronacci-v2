import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  title: String,
  description: String,
  url: String,
  copyright: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
