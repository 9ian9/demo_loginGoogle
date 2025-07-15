import SideBar from "@/components/SideBar";
function DashboardLayout({ children }){
    return(

        <div className="flex w-screen">
            <SideBar />
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}
export default DashboardLayout;