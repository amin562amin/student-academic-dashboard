// gives access to EXPRESS 
// also allows front end to talk to backend
const express = require("express");
const cors = require("cors");
const db = require("./database/db");


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
    db.all("SELECT * FROM students", [], (err, rows) => {
      if (err){
        return res.status(500).json({
          message: "Failed to fetch students",
          error: err.message,
        });
      }

      res.json(rows)
    });
});

app.post("/api/students", (req, res) => {
  const {name,course,qualification,averageGrade, attendance} = req.body;

  const sql = `INSERT INTO students
  (name, course, qualification, averageGrade, attendance)
  VALUES (?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [name, course, qualification, averageGrade, attendance],
  function (err) {
    if (err){
      return res.status(500).json({
        message: "Failed to add student",
        error: err.message,
      });
    }

    res.status(201).json({
      message: "Student added",
      id: this.lastID,
    });
  });
 
});

app.delete("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const sql = `DELETE FROM students
  WHERE id = ?`;
  db.run(
    sql,
    [id],
    function (err){
      if(err){
        return res.status(500).json({
          message: "Failed to delete student",
          error: err.message,
        });
      }

      if(this.changes === 0){
        return res.status(404).json({
          message: "Student wasn't found",
        });
      }

      res.json({
        message: `Student ${id} deleted`,
      });
    });
 
});

app.put("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  // 
  const index = studentList.findIndex(
    student => student.id === id);

    // check if the student exists
    if (index === -1)
    {
      return res.status(404).json({
        message: `Student wasn't found`
      });
    }
    
    const updatedStudent = {
      ...req.body,
      id:id,
    };

    studentList[index] = updatedStudent;
    res.json({
      message: `Student ${id} updated`,
      student: updatedStudent
    });

}) 

// Express starts listening for requests
app.listen(5000, () => {
  console.log("Server running on port 5000");
});