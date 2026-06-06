// This service handles where the data is saved/lodaded from 
import type { Student } from "../components/AddStudentsForm";

const STORAGE_KEY = "students"

export const studentServices = {
    getStudents(): Student[] {
        const savedStudents = localStorage.getItem(STORAGE_KEY);

        if (!savedStudents){
            return [];
        }
        return JSON.parse(savedStudents);
    },

    saveStudents(students: Student[]): void {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(students)
        )
    }
};