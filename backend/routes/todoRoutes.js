const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  addNote
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.post("/:id/notes", addNote);

module.exports = router;
