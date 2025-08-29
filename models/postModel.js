import mongoose from "mongoose";

// 1. Define schema: blueprint for a Post
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// 2. Create model from schema
const Post = mongoose.model("Post", postSchema);

export default Post;
