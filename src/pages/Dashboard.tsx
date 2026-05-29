import Layout from "../components/Layout"
import DashboardCard from "../components/DashboardCard"
import type { Student } from "../components/AddStudentsForm"
import { studentList } from "../data/students"
import { useEffect,useState } from "react"



function Dashboard() {
 
  const [students, setStudents] = useState<Student[]>(()=>
  {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents)
    : studentList;
  });
  

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  
  const firstClassStudents = students.filter((student) => student.qualification === "First").length;
  const atRiskStudents = students.filter((student) => student.averageGrade < 40||student.attendance < 60).length;
  const topStudent = students.reduce((highest, student) => student.averageGrade > highest.averageGrade
  ? student : highest
  )
  const average_Grade = students.length > 0 ?
  Math.round(students.reduce(
  (total, student) => total + student.averageGrade,
  0
  )/ students.length)
  :0;

  const averageAttendance = students.length > 0 ?
  Math.round(students.reduce(
    (total, student) => total + student.attendance, 0
  )/ students.length)
  : 0;

  const uniqueCourses = [...new Set (students.map((student) => student.course))]

 
  return (
    <Layout>

      <h1 className="text-3xl font-bold mb-6 align-top text-center">Student Dashboard</h1>

      {/* Styling for the grid and cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-6">      
        <DashboardCard title = "Average Grade" value = {average_Grade.toString()}/>
        <DashboardCard title="Average Attendance" value= {averageAttendance.toString()} />
        <DashboardCard title="Total Students" value={students.length.toString()} />
        <DashboardCard title="Unique Courses" value= {uniqueCourses.length.toString()} />
        <DashboardCard title= "First Class Students" value = {firstClassStudents.toString()}/>
        <DashboardCard title = "At Risk Students" value = {atRiskStudents.toString()} />
        <DashboardCard title = "Top Student" value = {students.length > 0 ? topStudent.name.toString() : "N/A"}
         />
      </section>      
    </Layout>
    
    
  )
}

export default Dashboard;