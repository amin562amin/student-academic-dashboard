// This service handles communication with the student API
import type { Student } from "../components/AddStudentsForm";

export const studentServices = {
    async getStudents(): Promise<Student[]> {
        
        const response = await fetch(
            "http://localhost:5000/api/students"
        );

        if(!response.ok){
            throw new Error("Failed to fetch students");
        }

        const students = await response.json();

        return students;
    },

    // Sends a DELETE request to remove a student
    async deleteStudent(id: number){
    const response = await fetch(`http://localhost:5000/api/students/${id}`,{
    method: "DELETE",
   })
   if(!response.ok){
    throw new Error("Failed to delete student");
   }
     
   },

    async addStudent(student: Student){
    const response = await fetch(`http://localhost:5000/api/students`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
    });
    if(!response.ok){
        throw new Error("Failed to add student");
    }
    const data = await response.json();

    return data.id;
   },

   async updateStudent(student:Student){
    const response = await fetch(`http://localhost:5000/api/students/${student.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        } ,
        body: JSON.stringify(student),
    });
    if(!response.ok){
        throw new Error("Failed to update student");
    }
   }
};