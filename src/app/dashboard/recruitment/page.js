import HeaderContent from "@/components/HeaderContent";
<<<<<<< HEAD
=======
import Card from "@/components/recruitment/Card";
>>>>>>> eebccbc1021d1d231ef03893653c929e4cc70eae

export default function dashboard(){
    const title ="Recruitment"
    const description ="Track, manage and forecast your recruitment and candidate"
    return (
<<<<<<< HEAD
        <>
        <HeaderContent title={title} description={description} />
        </>
=======
        <div>
            <HeaderContent title={title} description={description} />
            <Card/>
        </div>
>>>>>>> eebccbc1021d1d231ef03893653c929e4cc70eae
    )
}