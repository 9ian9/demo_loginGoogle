import HeaderContent,{BreakCrumbs} from "@/components/HeaderContent" 
import PositionInformation from "@/components/form/PositionInformation"
export default function FormPosition(){
    return (
        <div className="flex flex-col w-full pt-4">
            <BreakCrumbs/>
            <HeaderContent title={"Create Position"} description={""}/>
            <div className="flex justify-center mt-4">
                <PositionInformation/>
           </div>
        </div>
    )
}