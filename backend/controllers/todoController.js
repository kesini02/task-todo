const Todo = require("../models/Todo");
const User = require("../models/User");

exports.getTodos = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) return res.status(400).json({ error: "user_id is required" });

    const todos = await Todo.find({ createdBy: user_id }).populate(
      "assignedTo"
    ).sort({createdAt : -1})

    res.status(200).json(todos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong", details: error.message });
  }
};



exports.createTodo = async (req, res) => {
  const { title, description,  priority, assignedTo, createdBy } = req.body;

  const todo = await Todo.create({
    title,
    description,
    priority,
    assignedTo,
    createdBy
  });

  res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
  const { title, description, tags, priority, assignedTo, createdBy } =
    req.body;
  const updated = await Todo.findByIdAndUpdate(req.params.id, {
    title,
    description,
    tags,
    priority,
    assignedTo,
    createdBy,
  });
  res.json(updated);
};


exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
};

exports.addNote = async (req, res) => {
  const { text } = req.body;
  const todo = await Todo.findById(req.params.id);
  todo.notes.push({ text });
  await todo.save();
  res.json(todo);
};
