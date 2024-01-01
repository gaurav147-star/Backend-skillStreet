const Todo = require("../models/todoModel");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

const singleTodo = async (req, res) => {
  try {
    const note = await Todo.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (title.length < 5 || content.length < 5) {
      return res
        .status(404)
        .json({ message: "title and content length is more then 5" });
    }
    const newTodo = new Todo({
      title,
      content,
      user: req.user._id,
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { title, content },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllTodos,
  singleTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
