import SideBar from "@/components/SideBar";
function DashboardLayout({ children }){
    return(
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}
export default DashboardLayout;