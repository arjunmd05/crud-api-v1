import express from "express";
import {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js"; // To import middleware
const router = express.Router();

// CRUD Routes
router.get("/", getPosts); // GET /api/posts  --public route
router.post("/", protect, createPost); // POST /api/posts  --protected route (require login)
router.get("/:id", getPostById); // GET /api/posts/:id  --public route
router.put("/:id", protect, updatePost); // PUT /api/posts/:id  --protected route (require login)
router.delete("/:id", protect, deletePost); // DELETE /api/posts/:id  --protected route (require login)

export default router;
