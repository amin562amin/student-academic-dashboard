// gives access to EXPRESS 
// also allows front end to talk to backend
const express = require("express");
const cors = require("cors");



// creating the backend application
const app = express();

// Enables cross orgin requests
// expres.json allows express to understand JSON sent by the frontend
app.use(cors());
app.use(express.json());


// Function runs antyime someone visits /app/test
app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend working!"
  });
});

const studentList = require("./data/students");

app.get("/api/students", (req,res) => {
    res.json(studentList);
});

app.post("/api/students", (req, res) => {
  const newStudent = req.body;

  studentList.push(newStudent);

  res.status(201).json({
    message: "Student added",
    student: newStudent,
  });
});

app.delete("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  res.json({
    message: `Deleting student ${id}`
  });
});


// Express starts listening for requests
app.listen(5000, () => {
  console.log("Server running on port 5000");
});