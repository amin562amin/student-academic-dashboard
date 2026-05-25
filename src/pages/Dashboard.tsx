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
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8 ml-20">
        <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

        {/* Styling for the grid and cards */}
        <section className="grid grid-cols-4 gap-5 my-6">
        <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setsearchTerm} 
        />
          <DashboardCard title = "Average Grade"value = "70"/>
          <DashboardCard title="Attendance" value="91%" />
          <DashboardCard title="Modules" value="5" />
          <DashboardCard title="Assignments" value="3" />
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
            <th className={`${header_styling}`}>Grade</th>
            <th className={`${header_styling}`}>Attendance</th>
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
            grade={student.grade}
            attendance={student.attendance}
            />
            ))) : (

              <tr>
                <td colSpan={5} className="py-6 text-center text-gray-500">
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