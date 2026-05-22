
type StudentRowProps = {
  id: number
  name: string
  course: string
  grade: string
  attendance: string
}

function StudentRow({ id, name, course, grade, attendance}: StudentRowProps){
    return( 
        <tr className="border-b ">
            <td className="p-4">{id}</td>
            <td className="p-4">{name}</td>
            <td className="p-4">{course}</td>
            <td className="p-4">{grade}</td>
            <td className="p-4">{attendance}</td>
        </tr>
    )
}

export default StudentRow