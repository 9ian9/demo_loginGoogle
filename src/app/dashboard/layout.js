import SideBar from "@/components/SideBar";
function DashboardLayout({ children }){
    return(
        <div className="flex h-screen w-full">
            <SideBar className='w-56 min-w-[14rem] max-w-[14rem] flex-shrink-0' />
           <div className="flex flex-1 overflow-hidden">
                <div className="w-full h-full overflow-auto">
                {children}
                </div>
            </div>
        </div>
    )
}
export default DashboardLayout;