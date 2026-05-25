import { useState, type SetStateAction } from "react"

type StudentFormProps = {
  students: Student[];
  setStudents: React.Dispatch<SetStateAction<Student[]>>;
}


export type Student = {
    id: number;
    name: string;
    course: string;
    grade: string;
    attendance: string;
}





function AddStudentsForm({ students, setStudents }: StudentFormProps) {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [grade, setGrade] = useState("");
    const [attendance, setAttendance] = useState("");

    const handleAddStudent = () => {
        const newStudent: Student = {

            id: students.length + 1,
            name,
            course,
            grade,
            attendance
            
        };

        setStudents([...students, newStudent]);

        setName("");
        setCourse("");
        setGrade("");
        setAttendance("");

        console.log(newStudent);
    }
    return( 
        <div className="bg-gray-200 rounded-xl p-6 shadow-md my-6">
            <h2 className="text-xl font-semibold mb-4">Add Student</h2>
            <form className="flex gap-4 items-center flex-wrap">

                <input
                className="border border-gray-300 rounded-lg px-4 py-2"
                type="text" 
                placeholder="Student name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

                <input
                className="border border-gray-300 rounded-lg px-4 py-2"
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e)=> setCourse(e.target.value)} />

                <input
                className="border border-gray-300 rounded-lg px-4 py-2"
                type="text"
                placeholder="Grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)} />

                <input 
                className="border border-gray-300 rounded-lg px-4 py-2"
                type="text" 
                placeholder="Attendance"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)} /> 

                <button onClick={() => handleAddStudent()}
                type="button"
                className="bg-black text-white px-4 py-2 rounded-lg"
                >
                Add Student
                </button>
            </form>
        </div>
    )
}

export default AddStudentsForm