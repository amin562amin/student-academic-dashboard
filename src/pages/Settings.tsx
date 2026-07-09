
import { UseStudents } from "../context/StudentContext";

export default function Settings() {
  const {students, } = UseStudents();

  const totalCourses = new Set(students.map(student => student.course)).size
  
  
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">
        Settings
      </h1>

     

<div className="bg-white rounded-xl shadow-md p-6">

  <h3 className="text-xl font-semibold mb-4">System Information</h3>
  <div>
   
     <div className="space-y-2">
  <div className="flex justify-between border-b pb-2">
    <span>Total Students</span>
    <span>{students.length}</span>
  </div>

  <div className="flex justify-between border-b pb-2">
    <span>Total Courses</span>
    <span>{totalCourses}</span>
  </div>

  <div className="flex justify-between">
    <span>Storage</span>
    <span>SQLite</span>
  </div>
</div>
   
  </div>
</div>
    </>
  );
}