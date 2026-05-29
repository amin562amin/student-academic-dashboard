import Sidebar from "./Sidebar"

type LayoutProps = {
    children: React.ReactNode
};

function Layout({children}: LayoutProps){

    return(
    <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <main className="flex-1 p-8 ml-20">
            {children}
        </main>
    </div>
    )
}

export default Layout
