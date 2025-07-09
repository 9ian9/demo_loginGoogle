import HeaderContent, {BreakCrumbs} from "@/components/HeaderContent";
import ItemCount from "@/components/recruitment/ItemCount";
export default function dashboard(){
    const title ="All candidates"
    const description ="Manage your candidates and detail here."
    return (
        <div className="mt-[16px]">
            <BreakCrumbs />
            <div className="">
                <HeaderContent title={title} description={description}/>
                <div className="badge badge-md border-[#374151] float-left">
                    <ItemCount endpoint={"api/candidate"}/>
                </div>
            </div>
            
        </div>
    )
}