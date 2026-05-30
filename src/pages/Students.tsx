import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import AddStudentsForm,  {type Student} from "../components/AddStudentsForm";
import StudentRow from "../components/StudentRow";
import { UseStudents } from "../context/StudentContext";
import { useState } from "react";




export default function Students() {
  const header_styling = "p-4 text-left"
  const [searchTerm, setSearchTerm] = useState("");
  const {students, setStudents} = UseStudents();
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const filteredStudent = students.filter((student) =>
  student.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()));

  
  
  const deleteStudent = (id:number) =>{
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    
    <Layout>
      <h1 className="text-3xl font-bold mb-6 align-top text-center">Students</h1>

      <div className="mb-12">
      <SearchBar 
      searchTerm= {searchTerm}
      setSearchTerm={setSearchTerm}
      />
      </div>
      
      <AddStudentsForm 
      students={students}
      setStudents={setStudents}
      editingStudent={editingStudent}
      setEditingStudent={setEditingStudent}
      />

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
            setEditingStudent={setEditingStudent}
            />
            ))) : (

              <tr>
                <td colSpan={8} className="py-6 text-center text-gray-500">
                No Students Found
                </td>
              </tr>
            )}
        </tbody>
      </table>
      </Layout>
  );
}