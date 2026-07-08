
import { useEffect, useState, type SetStateAction } from "react"
import { toast } from "react-toastify";



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

    const clearForm = () => {
        setName("");
        setCourse("");
        setaverageGrade("");       
        setAttendance("");
    }
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

    const handleSubmitStudent = async () => {
        // if any field is empty, function stops
        if (!name || !course || !averageGrade || !attendance) 
        {
            toast.error("Please complete all fields");
            return;
        }

        const grade = Number(averageGrade);
        const attendanceValue = Number(attendance);


    if (grade < 0 || grade > 100) {
        toast.error("Grade must be between 0 and 100");
        return;
    }

    if (attendanceValue < 0 || attendanceValue > 100) {
        toast.error("Attendance must be between 0 and 100");
        return;
    }





        //  object that represents final student information
        const newStudent: Student = {
            //  Keeping same student id 
            id: editingStudent ? editingStudent.id: students.length + 1,
            name,
            course,
            qualification: getQualification(gradeValue),
            averageGrade: grade,
            attendance: attendanceValue,
        };

        if (editingStudent){

             const response = await fetch(
                `http://localhost:5000/api/students/${editingStudent.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newStudent),
                }
            );

            if (!response.ok){
                throw new Error("Failed to update student");
            }


            setStudents(
                students.map((student) =>
                    student.id === editingStudent.id ? newStudent: student
                )
            );
            // No one is being edited any more 
            setEditingStudent(null);
            clearForm();
            toast.success("Student updated successfully");
        }else {
            const response = await fetch("http://localhost:5000/api/students",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: newStudent.name,
                    course: newStudent.course,
                    qualification: newStudent.qualification,
                    averageGrade: newStudent.averageGrade,
                    attendance: newStudent.attendance,
                }),
            });

            const data = await response.json();

            const studentWithDatabaseId: Student = {
                ...newStudent,
                id: data.id,
            };
    
        setStudents([...students, studentWithDatabaseId]);
        toast.success("Student added succesfully");
        clearForm();
        }
    }

    const handleCancelEdit = () => {
        setEditingStudent(null);

      clearForm();
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

                <button onClick={() => {
                    handleSubmitStudent()}}
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