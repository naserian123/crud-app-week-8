const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // use 'data.db' for file persistence

db.serialize(() => {
  db.run(`CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )`);

  db.run(`CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT
  )`);
});

module.exports = db;
