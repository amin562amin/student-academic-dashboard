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

  // ensuring that the id specified by the user exists within a location in the array
  const index = studentList.findIndex(
    student =>  student.id === id);

  // Check if the student exists
  if (index === -1 )
  {
    return res.status(404).json({
      message: `Student wasn't found`
    });
  }

  studentList.splice(index,1);

  res.json({
    message: `Deleted student ${id}`,
    students: studentList,
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