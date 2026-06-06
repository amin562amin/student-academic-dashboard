// This context manages React state for the app

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { studentList } from "../data/students";
import type { Student } from "../components/AddStudentsForm";
import { studentServices } from "../services/studentService";

// Prop containing individual Student and their state
type StudentContextType = {
    students: Student[];
    setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
};

// Making the context Container 
const StudentContext = createContext<StudentContextType | undefined>(undefined);

type StudentProviderProps = {
    children: ReactNode
}

// Storing the states used across pages within the StudentProvider Container
export function StudentProvider({children}: StudentProviderProps){
    const [students, setStudents] = useState<Student[]>(() =>{

        const savedStudents = studentServices.getStudents();
        return savedStudents.length > 0  ? savedStudents : studentList;
    });

     useEffect(() => {
    studentServices.saveStudents(students);
}, [students]);

    return(
        // Putting students & setStudents inside the StudentContext Context
        <StudentContext.Provider value = {{students, setStudents}}>
            {children}
        </StudentContext.Provider>
    );
}
// Retrieving the data within the Container 
export function UseStudents(){
    const context = useContext(StudentContext);

    if (!context){
        throw new Error("useStudents must be inside a StudentProvider");
    }


    return context;
}