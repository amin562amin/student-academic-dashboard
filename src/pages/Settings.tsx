import Layout from "../components/Layout";
import { UseStudents } from "../context/StudentContext";
import { studentList } from "../data/students";
export default function Settings() {
  const {students, setStudents} = UseStudents();

  function resetStudents(){
    
    const listDecision = window.confirm("Do you want to reset the student list ?")
    if(listDecision){
      setStudents(studentList)
    }

   
  }
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center mb-6">
        Settings
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
  <h2 className="text-xl font-semibold mb-2">Data Management</h2>
  <p className="text-gray-600 mb-4">
    Reset all student records currently stored in the dashboard.
  </p>

  <button
    onClick={resetStudents}
    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
  >
    Reset Student Data
  </button>
</div>
    </Layout>
  );
}