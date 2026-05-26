import Sidebar from "../components/Sidebar"
import DashboardCard from "../components/DashboardCard"
import StudentRow from "../components/StudentRow"
import SearchBar from "../components/SearchBar"
import AddStudentsForm from "../components/AddStudentsForm"
import { studentList } from "../data/students"
import { useState } from "react"

function Dashboard() {
  const header_styling = "p-4 text-left"
  const [students, setStudents] = useState(studentList);
  const [searchTerm, setsearchTerm] = useState("");

  const filteredStudent = students.filter((student) => student.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()));
  
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

  const deleteStudent = (id:number) =>{
    setStudents(students.filter((student) => student.id !== id));
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8 ml-20">
        <h1 className="text-3xl font-bold mb-6 align-top">Student Dashboard</h1>

        {/* Styling for the grid and cards */}
        <section className="grid grid-cols-4 gap-5 my-6">
        <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setsearchTerm} 
        />
          <DashboardCard title = "Average Grade" value = {average_Grade.toString()}/>
          <DashboardCard title="Average Attendance" value= {averageAttendance.toString()} />
          <DashboardCard title="Total Students" value={students.length.toString()} />
          <DashboardCard title="Unique Classifications" value= {uniqueCourses.length.toString()} />
        </section>
        <AddStudentsForm
        students={students}
        setStudents={setStudents}
        
          />

        {/*Styling and Placement for the table  */}
      <table className="w-full rounded-xl overflow-hidden shadow-md">
        <thead className="bg-gray-200">

          <tr>            
            <th className={`${header_styling}`}>ID</th>
            <th className={`${header_styling}`}>Name</th>
            <th className={`${header_styling}`}>Course</th>
            <th className={`${header_styling}`}>Average Grade</th>
            <th className={`${header_styling}`}>Qualification</th>
            <th className={`${header_styling}`}>Attendance</th>
            <th className= {`${header_styling}`}> Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            filteredStudent.length > 0 ?(
            filteredStudent.map((student) => (
            <StudentRow
            key={student.id}
            id={student.id}
            name={student.name}
            course={student.course}
            averageGrade={student.averageGrade}
            qualification={student.qualification}
            attendance={student.attendance}
            deleteStudent={deleteStudent}
            />
            ))) : (

              <tr>
                <td colSpan={7} className="py-6 text-center text-gray-500">
                No Students Found
                </td>
              </tr>
            )}
        </tbody>
      </table>
      </main>
    </div>
  )
}

export default Dashboard