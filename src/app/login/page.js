'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import api from '@/lib/axiosInstance';
import LoginWithEmail from '@/components/login/LoginWithEmail.js';

function Login() {
  useEffect(() => {
    const checkAccessToken = async () => {
      const token = localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');
      
      if (token){
        redirect('/home');
      }

      if (!token && refreshToken) {
        try {
          const res = await api.post('/api/token', {
            refresh_token: refreshToken
          });

          const { access_token } = res.data;
          localStorage.setItem('access_token', access_token);
        } catch (err) {
          console.log('Unable to refresh token:', err);
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.href = '/login';
        }
      }
    };

    checkAccessToken();
  }, []);

    return(
        <div className="bg-white flex justify-center items-center h-screen">
            <div className="bg-[#F9FAFB] py-20 px-10 shadow-[0_4px_12px_#DCDCDC]">
                <div className="flex flex-col gap-4">

                    <div className="flex flex-col gap-2 items-center">
                        <img src="/logo.png" className="h-12 w-33" alt='Logo Bespokify' />
                        <p className="text-2xl font-bold">Sign in</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <LoginWithEmail />
                        <div className="divider h-5 m-0 text-xs">or</div>
                        <button className="btn bg-white text-black border-[#e5e5e5] rounded-[8] h-12" >
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Login;
