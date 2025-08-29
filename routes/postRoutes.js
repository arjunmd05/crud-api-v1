import express from "express";
import {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

// CRUD Routes
router.get("/", getPosts); // GET /api/posts
router.post("/", createPost); // POST /api/posts
router.get("/:id", getPostById); // GET /api/posts/:id
router.put("/:id", updatePost); // PUT /api/posts/:id
router.delete("/:id", deletePost); // DELETE /api/posts/:id

export default router;
