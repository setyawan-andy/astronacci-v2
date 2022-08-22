import NewArticle from "../models/articles.js";

export const getArticles = async (req, res) => {
  try {
    const articles = await NewArticle.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// This function to add articles if needed
export const createArticle = async (req, res) => {
  const article = req.body;
  const newArticle = new NewArticle(article);
  try {
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
