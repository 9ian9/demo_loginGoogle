import HeaderContent, {BreakCrumbs} from "@/components/HeaderContent";

export default function dashboard(){
    const title ="All candidates"
    const description ="Manage your candidates and detail here."
    return (
        <div className="mt-[16px]">
            <BreakCrumbs />
            <div className="flex">
                <HeaderContent title={title} description={description}/>
                <div className="badge badge-md border-[#374151] float-left">35 item</div>
            </div>
            
        </div>
    )
}