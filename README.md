# CRUD App – Week 8

A simple Node.js Express CRUD (Create, Read, Update, Delete) API for managing **students** and **courses**. This project is a learning exercise for server basics, routing, and RESTful APIs.

## Features

- Manage students and courses with full CRUD operations
- In-memory data storage (no database needed for demo)
- RESTful API structure
- CORS enabled for frontend integration
- Hot-reloading with nodemon

## Folder Structure

```
crud-app-week-8/
├── routes/
│   ├── students.js
│   └── courses.js
├── index.js
├── package.json
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/naserian123/crud-app-week-8.git
   cd crud-app-week-8
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npx nodemon index.js
   ```
   > You should see:  
   > `Server running at http://localhost:3000`

4. **Test the API:**
   - [http://localhost:3000/students](http://localhost:3000/students)
   - [http://localhost:3000/courses](http://localhost:3000/courses)

## API Endpoints

### Students

- `GET /students` – Get all students
- `GET /students/:id` – Get a student by ID
- `POST /students` – Add a new student (`{ "name": "Alice", "age": 20 }`)
- `PUT /students/:id` – Update a student by ID
- `DELETE /students/:id` – Delete a student by ID

### Courses

- `GET /courses` – Get all courses
- `GET /courses/:id` – Get a course by ID
- `POST /courses` – Add a new course (`{ "title": "Math", "instructor": "Jane" }`)
- `PUT /courses/:id` – Update a course by ID
- `DELETE /courses/:id` – Delete a course by ID

> **Tip:** Use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test POST, PUT, and DELETE routes.

## Example: Sample Request

**Add a new student**
```bash
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Charlie", "age": 23}'
```

## Notes

- This app uses in-memory arrays, so data resets on server restart.
- For learning/demo purposes; not meant for production.

## Author

- [naserian123](https://github.com/naserian123)

---

Happy coding! 🚀
