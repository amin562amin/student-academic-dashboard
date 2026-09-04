// This context manages React state for the app

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Student } from "../components/AddStudentsForm";
import { studentServices } from "../services/studentService";

// Prop containing individual Student and their state
type StudentContextType = {
    students: Student[];
    setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
    loading: boolean;
    error: string | null;
};

// Making the context Container 
const StudentContext = createContext<StudentContextType | undefined>(undefined);

type StudentProviderProps = {
    children: ReactNode
}

// Storing the states used across pages within the StudentProvider Container
export function StudentProvider({children}: StudentProviderProps){
    const [students, setStudents] = useState<Student[]>([]);
    const [loading,setLoading] = useState<boolean>(true); // can only be true or false
    const [error, setError] = useState<string | null>(null); // either an error message or nothing

     useEffect(() => {
        async function loadStudents() {
            setLoading(true);
            try {
            const studentsFromAPI = await studentServices.getStudents();
            setStudents(studentsFromAPI);
            } catch {
                setError("Failed to load students")
            } finally {
                setLoading(false); // loading is finished regardless of outcome
                
            }
            
        }
    loadStudents();
}, []);

    return(
        // Putting students & setStudents + loading and error information inside the StudentContext Context
        <StudentContext.Provider value = {{students, setStudents, loading, error}}>
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