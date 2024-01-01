const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  singleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const authMiddleware = require("../middleware/authMiddleware");

// Protect routes with authentication middleware
router.use(authMiddleware);

// Define routes
router.get("/", getAllTodos);
router.get("/:id", singleTodo);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
