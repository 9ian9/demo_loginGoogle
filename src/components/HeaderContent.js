'use client'
import { usePathname,useRouter } from "next/navigation"

export default function HeaderContent({title,description}) {
    return (
    <>
        <div className="pt-[16px] pb-[16px] border-b border-b-[#E5E7EB] ">
            <p className="text-3xl leading-10 font-bold pb-[8px]">{title}</p>
            <p className="text-xs text-[#475467]">{description}</p>
        </div>
    </>
  );
}

export function BreakCrumbs (){
    
    const pathName = usePathname();
    const router=useRouter();

    const segments =pathName.split("/").filter(Boolean);
    const parentPaths= "/"+ segments.slice(0,-1).join("/");
    
    const handleClick = () =>{
        if (parentPaths !== "/")
        {

            router.push(parentPaths)
        }
    }
    return (
        <>
            <button onClick={handleClick} className="breadcrumbs text-sm text-[#374151]" >Back</button>
        </>
    )
}