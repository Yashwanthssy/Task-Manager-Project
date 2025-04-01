const express = require('express');
const Task = require('../models/Task'); // Import Task model

const router = express.Router();

// ✅ 1. Get All Tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ 2. Create a New Task
router.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title
    });
    const savedTask = await newTask.save(); // Save to DB
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// ✅ 3. Update a Task (Mark as Completed)
router.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true } // Return updated task
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// ✅ 4. Delete a Task
router.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
