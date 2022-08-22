import Video from "../models/videos.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createVideo = async (req, res) => {
  const video = req.body;
  const newVideo = new Video(video);
  try {
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
