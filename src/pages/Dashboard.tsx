import Sidebar from "../components/Sidebar"
import DashboardCard from "../components/DashboardCard"

function Dashboard() {
  return (
    <div className=" w-full m-14 box-border flex flex-wrap gap-5 justify-start max-w-lvw">
      
      <Sidebar />
      <DashboardCard 

      title = "Average Grade"
      value = "70"
      />
    </div>
  )
}

export default Dashboard