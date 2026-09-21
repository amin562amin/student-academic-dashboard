// Gives access to Express 
// Also allows frontend to communicate with backend
const express = require("express");
const cors = require("cors");
const db = require("./database/db");


// Creates the Express application
const app = express();

// Enables cross orgin requests
// expres.json allows Express to process JSON sent by the frontend 
app.use(cors());
app.use(express.json());


// Test route used to confirm that the backend is running
app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend working!"
  });
});



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
  // const {name,course,qualification,averageGrade, attendance} = req.body;
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
  const {name,course,qualification,averageGrade, attendance} = req.body;
  const sql = `UPDATE students
  SET name = ?,
  course = ?,
  qualification = ?,
  averageGrade = ?,
  attendance = ?
  WHERE id == ?` 

  db.run(
    sql,
    [name, course, qualification, averageGrade, attendance, id],
    function(err){
      if(err){
        return res.status(500).json({
          message: "Failed to edit student",
          error: err.message
        });
      }

      if(this.changes === 0){
        return res.status(404).json({
          message: "Student wasn't found",
        });
      }

      res.json({
        message: `Student ${id} has now been updated`,
      });
    });
 

}) 

// Starts the Express server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});