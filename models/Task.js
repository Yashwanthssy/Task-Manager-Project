const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },   // Task name (Required)
  completed: { type: Boolean, default: false }, // Default: Not completed
  createdAt: { type: Date, default: Date.now }  // Auto-generated timestamp
});

// Exporting the Task model
module.exports = mongoose.model('Task', taskSchema);
