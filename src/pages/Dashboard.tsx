import Sidebar from "../components/Sidebar"
import DashboardCard from "../components/DashboardCard"
import StudentRow from "../components/StudentRow"
import { studentList } from "../data/students"

function Dashboard() {
  const header_styling = "p-4 text-left"
  return (
    <div className=" w-full m-14 box-border flex flex-wrap gap-5 justify-start max-w-lvw ">
      <div className="grid grid-cols-4 gap-5">
        <h1 className="text-3xl font-bold mb-6 justify-center">Student Dashboard</h1>
        <Sidebar />
        <DashboardCard title = "Average Grade"value = "70"/>
        <DashboardCard title="Attendance" value="91%" />
        <DashboardCard title="Modules" value="5" />
        <DashboardCard title="Assignments" value="3" />
      </div>

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
          {studentList.map((student) => (
            <StudentRow
            key={student.id}
            id={student.id}
            name={student.name}
            course={student.course}
            grade={student.grade}
            attendance={student.attendance}
            />
          ))}
        </tbody>
    </table>    
    </div>
  )
}

export default Dashboard