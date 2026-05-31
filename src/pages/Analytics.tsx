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

    const lowGradeStudents = students.filter(
      (student) => student.averageGrade < 40
    );

    const lowAttendanceStudents = students.filter(
    (student) => student.attendance < 60
    );

    const highRiskStudents = students.filter(
    (student) =>
    student.averageGrade < 40 &&
    student.attendance < 60
    );

    const courseCounts = students.reduce((accumulator, student) => {
      accumulator[student.course] = (accumulator[student.course] || 0) + 1;
      return accumulator;
    }, {} as Record<string, number>)

    const courseAverages = students.reduce((accumulator, student) => {
      {if (!accumulator[student.course]){
        accumulator[student.course] = {
          totalGrades: student.averageGrade,
          studentCount: 1,
        };
        
      }else{
        accumulator[student.course].totalGrades += student.averageGrade;
        accumulator[student.course].studentCount += 1;
      }

    
    } 


    return accumulator},
    {} as Record<string, {totalGrades:number ,studentCount: number}>);
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
        <table className="w-full rounded-xl shadow-md overflow-hidden mb-12 mt-10">
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

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">
        Risk Breakdown
      </h2>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Low Grade</h3>
        {lowGradeStudents.length > 0 ? (lowGradeStudents.map((student) =>(
        <p key={student.id} className="py-2 border-b">
          {student.name} - {student.averageGrade}%
        </p>))):(<p className="text-gray-500">No students found</p>)}
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
  <h3 className="text-xl font-semibold mb-4">Low Attendance</h3>

  {lowAttendanceStudents.length > 0 ? (
    lowAttendanceStudents.map((student) => (
      <p key={student.id} className="py-2 border-b">
        {student.name} - {student.attendance}%
      </p>
    ))
  ) : (
    <p className="text-gray-500">No students found</p>
  )}
</div>

<div className="bg-white rounded-xl shadow-md p-6">
  <h3 className="text-xl font-semibold mb-4">High Risk</h3>

  {highRiskStudents.length > 0 ? (
    highRiskStudents.map((student) => (
      <p key={student.id} className="py-2 border-b">
        {student.name} - {student.averageGrade}% grade, {student.attendance}% attendance
      </p>
    ))
  ) : (
    <p className="text-gray-500">No students found</p>
  )}
</div>

<div className="bg-white rounded-xl shadow-md p-6">

  <h4 className="text-xl font-semibold mb-4">Course Breakdown</h4>
  <div>
    {(Object.entries(courseCounts)).map(([course,count]) =>(
      <p className="py-2 border-b">
        {course} - {count} {count === 1 ? "student" : "students"}
      </p>
    ))}
  </div>
</div>

<div className="bg-white rounded-xl shadow-md p-6">

  <h4 className="text-xl font-semibold mb-4">Course Average Grade</h4>
  <div>
    {(Object.entries(courseAverages)).map(([course,{totalGrades,studentCount}]) =>(
      <p key= {course} className="py-2 border-b">
        {course} - {(totalGrades / studentCount).toFixed(1)}% 
      </p>
    ))}
  </div>
</div>
      </section>
    </Layout>
  );
}