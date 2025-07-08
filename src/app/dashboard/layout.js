import SideBar from "@/components/home/SideBar";
function DashboardLayout({ children }){
    return(
        <div className="flex">
            <SideBar />
            {children}
        </div>
    )
}
export default DashboardLayout;