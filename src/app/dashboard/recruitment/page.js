import HeaderContent from "@/components/HeaderContent";
import Card from "@/components/recruitment/Card";

export default function dashboard(){
    const title ="Recruitment"
    const description ="Track, manage and forecast your recruitment and candidate"
    return (
        <div className="flex flex-col gap-4">
            <HeaderContent title={title} description={description} />
            <Card/>
        </div>
    )
}