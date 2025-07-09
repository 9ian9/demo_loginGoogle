'use client';

import { useEffect, useState } from 'react';
import { useRouter,useSearchParams, redirect } from 'next/navigation';
import api from '@/lib/axiosInstance';
import LoginWithEmail from '@/components/login/LoginWithEmail.js';
import LoginWithGoogle from '@/components/login/LoginWithGoogle';

function Login() {
  const router = useRouter();
  useEffect(() => {
    const checkAccessToken = async () => {

      const token = localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');

      if (token){
        router.push('/home');      }

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
  const searchParams=useSearchParams();
  const error =searchParams.get("error");

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
                        <LoginWithGoogle/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
