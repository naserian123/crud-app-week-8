const express = require('express');
const router = express.Router();

// In-memory "database"
let students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 22 }
];

// GET all students
router.get('/', (req, res) => {
  res.json(students);
});

// GET one student by ID
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('Student not found');
  res.json(student);
});

// POST new student
router.post('/', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT update student
router.put('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('Student not found');

  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;

  res.json(student);
});

// DELETE student
router.delete('/:id', (req, res) => {
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Student not found');

  const deleted = students.splice(index, 1);
  res.json(deleted);
});

module.exports = router;


