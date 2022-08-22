import mongoose from "mongoose";

const newArticleSchema = mongoose.Schema({
  title: String,
  content: String,
  image: String,
  author: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const NewArticle = mongoose.model("NewArticle", newArticleSchema);

export default NewArticle;
