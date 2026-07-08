// This service handles communication with the student API
import type { Student } from "../components/AddStudentsForm";



export const studentServices = {
    async getStudents(): Promise<Student[]> {
        
        const response = await fetch(
            "http://localhost:5000/api/students"
        );

        const students = await response.json();

        return students;
    },

    // Talk to the API and make sure the database deleteion succeeds
    async deleteStudent(id: number){
    const response = await fetch(`http://localhost:5000/api/students/${id}`,{
    method: "DELETE",
   })
   if(!response.ok){
    throw new Error("Failed to delete student");
   }
     
   }
    
};