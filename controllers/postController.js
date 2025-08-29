import Post from "../models/postModel.js";

//  Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // fetch all posts from DB
    res.status(200).json(posts); // send posts as JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // handle error
  }
};

// Create a new post
export const createPost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const post = await Post.create({ title, content, author });
    res.status(201).json(post); // return newly created post
  } catch (error) {
    res.status(400).json({ message: error.message }); // validation error
  }
};

//  Get a single post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a post by ID
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a post by ID
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
