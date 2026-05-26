import { useState, type SetStateAction } from "react"

type StudentFormProps = {
  students: Student[];
  setStudents: React.Dispatch<SetStateAction<Student[]>>;
}


export type Student = {
    id: number;
    name: string;
    course: string;
    qualification: string;
    averageGrade: number;
    attendance: number;
}





function AddStudentsForm({ students, setStudents,  }: StudentFormProps) {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [averageGrade, setaverageGrade] = useState("");
    const [attendance, setAttendance] = useState("");
    const gradeValue = Number(averageGrade)


    const getQualification = (averageGrade: number) => {
        if (averageGrade >= 70) return "First";
        if (averageGrade >= 60) return "2:1";
        if (averageGrade >= 50) return "2:2";
        if (averageGrade >= 40) return "Third";
        return "Fail";
    };

    const handleAddStudent = () => {
        if (!name || !course || !averageGrade || !attendance) 
        {
            return;
        }
        const newStudent: Student = {

            id: students.length + 1,
            name,
            course,
            qualification: getQualification(gradeValue),
            averageGrade: Number(averageGrade),
            attendance: Number(attendance),
        };

        setStudents([...students, newStudent]);
        setName("");
        setCourse("");
        setaverageGrade("");       
        setAttendance("");
        console.log(newStudent);
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

                <button onClick={() => handleAddStudent()}
                type="button"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                Add Student
                </button>
            </form>
        </div>
    )
}

export default AddStudentsForm