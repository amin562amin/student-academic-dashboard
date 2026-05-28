import { useEffect, useState, type SetStateAction } from "react"


type StudentFormProps = {
  students: Student[];
  setStudents: React.Dispatch<SetStateAction<Student[]>>;
//   Giving the Program what is needed to edit existing student
  editingStudent: Student | null;
//   A function capable of updating a Student or Null state
  setEditingStudent: React.Dispatch<SetStateAction<Student | null>>;
}


export type Student = {
    id: number;
    name: string;
    course: string;
    qualification: string;
    averageGrade: number;
    attendance: number;
}





function AddStudentsForm({ students, setStudents,editingStudent, setEditingStudent  }: StudentFormProps) {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [averageGrade, setaverageGrade] = useState("");
    const [attendance, setAttendance] = useState("");
    const gradeValue = Number(averageGrade)

    // Code runs when something changes and only if someones details are being edited 
    // This effect is only reran when editingStudent changes
    useEffect(() => {
        if (editingStudent)
        {

            setName(editingStudent.name);
            setCourse(editingStudent.course);
            setaverageGrade(editingStudent.averageGrade.toString());
            setAttendance(editingStudent.attendance.toString()); 
        }
    }, [editingStudent]

    )

    const getQualification = (averageGrade: number) => {
        if (averageGrade >= 70) return "First";
        if (averageGrade >= 60) return "2:1";
        if (averageGrade >= 50) return "2:2";
        if (averageGrade >= 40) return "Third";
        return "Fail";
    };

    const handleSubmitStudent = () => {
        // if any field is empty, function stops
        if (!name || !course || !averageGrade || !attendance) 
        {
            return;
        }
        //  object that represents final student information
        const newStudent: Student = {
            //  Keeping same student id 
            id: editingStudent ? editingStudent.id: students.length + 1,
            name,
            course,
            qualification: getQualification(gradeValue),
            averageGrade: Number(averageGrade),
            attendance: Number(attendance),
        };

        if (editingStudent){
            setStudents(
                students.map((student) =>
                    student.id === editingStudent.id ? newStudent: student
                )
            );
            // No one is being edited any more 
            setEditingStudent(null);
        }else {
            setStudents([... students, newStudent]);
        

        setStudents([...students, newStudent]);
        setName("");
        setCourse("");
        setaverageGrade("");       
        setAttendance("");
        console.log(newStudent);
        }
    }

    const handleCancelEdit = () => {
        setEditingStudent(null);

        setName("");
        setCourse("");
        setaverageGrade("");
        setAttendance("");
    }

    return( 
        <div className="bg-gray-200 rounded-xl p-6 shadow-md my-6">
            <h2 className="text-xl font-semibold mb-4">Add Student</h2>
            <form className="flex gap-4 items-center flex-wrap">

                <input
                className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
                type="text" 
                placeholder="Student name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

                <input
                className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e)=> setCourse(e.target.value)} />


                <input
                className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
                type="text"
                placeholder="Grade"
                value={averageGrade}
                onChange={(e) => setaverageGrade(e.target.value)} />

                

               

                <input 
                className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
                placeholder="Attendance"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)} /> 

                <button onClick={() => handleSubmitStudent()}
                type="button"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                {editingStudent ? "Save Changes" : "Add Student"}
                </button>

                {
                    editingStudent && (
                        <button type="button"
                        onClick={handleCancelEdit}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                        >
                         Cancel   
                        </button>
                    )
                }
            </form>
        </div>
    )
}

export default AddStudentsForm