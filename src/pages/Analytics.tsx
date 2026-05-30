import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";
import { UseStudents } from "../context/StudentContext";

export default function Analytics() {
  const {students} = UseStudents();
  const header_styling = "p-4 text-left"

  const highestGrade = students.length > 0 ? Math.max(...students.map((student) => student.averageGrade))  :0;

  const lowestGrade =
    students.length > 0
      ? Math.min(...students.map((student) => student.averageGrade))
      : 0;

  const bestAttendance =
    students.length > 0
      ? Math.max(...students.map((student) => student.attendance))
      : 0;

  const worstAttendance =
    students.length > 0
      ? Math.min(...students.map((student) => student.attendance))
      : 0;

  const firstCount = students.filter(
    (students) => students.qualification === "First"
  ).length;

  const twoOneCount = students.filter(
  (student) => student.qualification === "2:1"
).length;

const twoTwoCount = students.filter(
  (student) => student.qualification === "2:2"
).length;

const thirdCount = students.filter(
  (student) => student.qualification === "Third"
).length;

const failCount = students.filter(
  (student) => student.qualification === "Fail"
).length;



  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center mb-6">
        Analytics
      </h1>

      

      <section>

      </section>
      <section className= " grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-6">
        <DashboardCard title ="Highest Grade" value = {`${highestGrade}`} />
        <DashboardCard title ="Lowest Grade" value = {`${lowestGrade}`} />
        <DashboardCard title ="Best Attendance" value = {`${bestAttendance}`} />
        <DashboardCard title ="Worst Attendance" value = {`${worstAttendance}`} />
      </section>

      <h2 className="text-3xl font-bold text-center">Grade Breakdown</h2>
      <section>
        <table className="w-full rounded-xl shadow-md overflow-hidden">
          <thead className="bg-gray-200">
            <tr >
              <th className={`${header_styling}`}>First</th>
              <th className={`${header_styling}`}>2:1</th>
              <th className={`${header_styling}`}>2:2</th>
              <th className={`${header_styling}`}>Third</th>
              <th className={`${header_styling}`}>Fail</th>
            </tr>
          </thead>
            <tbody>
              <tr className="text-center border-b">
                <td className="p-4 text-left">{firstCount} </td>
                <td className="p-4 text-left">{twoOneCount} </td>
                <td className="p-4 text-left">{twoTwoCount} </td>
                <td className="p-4 text-left">{thirdCount} </td>
                <td className="p-4 text-left">{failCount}</td>
              </tr>

              <tr className="text-center">
                <td className="p-4 text-left">70+</td>
                <td className="p-4 text-left">60-69</td>
                <td className="p-4 text-left">50-59</td>
                <td className="p-4 text-left">40-49</td>
                <td className="p-4 text-left"> &lt; 40</td>
              </tr>
            </tbody>
          
        </table>
      </section>
    </Layout>
  );
}