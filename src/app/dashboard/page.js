'use client'
import api from "@/lib/axiosInstance";

function Home(){
    const check = async () => {
        const res = await api.get('http://172.16.8.126:8088/auth/me');
        console.log(res.data);
    }
    return(
        <div className="bg-[#FFFFFF]">
            hehe
            <button className="btn" onClick={check}>check thu</button>
        </div>
    )
}
export default Home;