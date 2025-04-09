const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tags: [String],
  priority: { type: String },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  notes: [{ text: String, createdAt: { type: Date, default: Date.now } }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Todo", todoSchema);
