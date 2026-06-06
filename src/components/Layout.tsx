import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom";


function Layout(){

    return(
    <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <main className="flex-1 p-8 ml-20">
            {/* Put the current route's page within this tag */}
            <Outlet />
        </main>
    </div>
    )
}

export default Layout
