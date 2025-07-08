import HeaderContent from "@/components/HeaderContent";
import Card from "@/components/recruitment/Card";

export default function dashboard(){
    const title ="Recruitment"
    const description ="Track, manage and forecast your recruitment and candidate"
    return (
        <div>
            <HeaderContent title={title} description={description} />
            <Card/>
        </div>
    )
}