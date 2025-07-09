import HeaderContent from "@/components/HeaderContent";
import Card from "@/components/recruitment/Card";
import ItemCount from "@/components/recruitment/ItemCount";
export default function dashboard(){
    const title ="Recruitment"
    const description ="Track, manage and forecast your recruitment and candidate"
    return (
        <div className="flex flex-col gap-4">
            <HeaderContent title={title} description={description} />
            <Card/>
            <div>
                <div className="flex gap-4 items-center ml-[32px]">
                    <p className="text-2xl font-bold">All position</p>
                    <div className="badge badge-md border-[#374151]">
                        <ItemCount endpoint={"api/positions"}/> items
                    </div>
                </div>
                <p className="ml-[32px] mt-1 text-[#374151] text-xs">Manage your position and job description here.</p>
            </div>
        </div>
    );
}