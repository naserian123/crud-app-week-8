const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the CRUD API. Try /students or /courses');
});

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

