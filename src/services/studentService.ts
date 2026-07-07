// This service handles where the data is saved/lodaded from 
import type { Student } from "../components/AddStudentsForm";

const STORAGE_KEY = "students"

export const studentServices = {
    async getStudents(): Promise<Student[]> {
        
        const response = await fetch(
            "http://localhost:5000/api/students"
        );

        const students = await response.json();

        return students;
    },

    saveStudents(students: Student[]): void {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(students)
        )
    }
};