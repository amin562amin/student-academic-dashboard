import type { Student } from "./AddStudentsForm"


type StudentRowProps = {
  id: number
  name: string
  course: string
  averageGrade: number
  qualification: string
  attendance: number
  deleteStudent: (id: number) => void
  setEditingStudent: React.Dispatch<React.SetStateAction<Student | null>>
}

function StudentRow({ id, name, course, averageGrade, qualification, attendance, deleteStudent, setEditingStudent}: StudentRowProps){
const currentStudent: Student = {

  id,
  name,
  course,
  averageGrade,
  qualification,
  attendance,
};


    
    
    const qualificationColour =
    qualification === "First" 
    ? "bg-green-100 text-green-800" 
    :  qualification === "2:1"
    ? "bg-blue-100 text-blue-800"
    : qualification === "2:2"
    ? "bg-yellow-100 text-yellow-100"
    : "bg-red-100 text-red-800";
    return( 
        <tr className="border-b hover:bg-gray-100 transition ">
            <td className="p-4 hover:bg-gray-50 transition">{id}</td>
            <td className="p-4 hover:bg-gray-50 transition">{name}</td>
            <td className="p-4 hover:bg-gray-50 transition">{course}</td>
            <td className="p-4 hover:bg-gray-50 transition">{averageGrade}</td>
            <td className="p-4 hover:bg-gray-50 transition">
                <span className={`px-3 py-1 rounded-full text-sm font-mediu, ${qualificationColour}`}>
                   {qualification} 
                   </span></td>
            <td className="p-4 hover:bg-gray-50 transition">{attendance}</td>
            <td className="p-4">
  <div className="flex gap-2">
    <button
      className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
      onClick={() => setEditingStudent(currentStudent)}
    >
      Edit
    </button>

    <button
      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
      onClick={() => deleteStudent(id)}
    >
      Delete
    </button>
  </div>
</td>
        </tr>
    )
}

export default StudentRow