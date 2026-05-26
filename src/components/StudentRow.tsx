
type StudentRowProps = {
  id: number
  name: string
  course: string
  averageGrade: number
  qualification: string
  attendance: number
}

function StudentRow({ id, name, course, averageGrade, qualification, attendance}: StudentRowProps){
    return( 
        <tr className="border-b hover:bg-gray-100 transition ">
            <td className="p-4">{id}</td>
            <td className="p-4">{name}</td>
            <td className="p-4">{course}</td>
            <td className="p-4">{averageGrade}</td>
            <td className="p-4">{qualification}</td>
            <td className="p-4">{attendance}</td>
        </tr>
    )
}

export default StudentRow