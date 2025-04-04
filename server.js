const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static('public'));

// Import and use task routes
const taskRoutes = require('./routes/tasks');
app.use('/api', taskRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Task Manager API');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
