const express = require('express');
const router = express.Router();

// In-memory "database"
let courses = [
  { id: 1, title: 'Math 101', description: 'Basic Math course' },
  { id: 2, title: 'History 201', description: 'World History' }
];

// GET all courses
router.get('/', (req, res) => {
  res.json(courses);
});

// GET one course by ID
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found');
  res.json(course);
});

// POST new course
router.post('/', (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    title: req.body.title,
    description: req.body.description
  };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// PUT update course
router.put('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found');

  course.title = req.body.title || course.title;
  course.description = req.body.description || course.description;

  res.json(course);
});

// DELETE course
router.delete('/:id', (req, res) => {
  const index = courses.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Course not found');

  const deleted = courses.splice(index, 1);
  res.json(deleted);
});

module.exports = router;




