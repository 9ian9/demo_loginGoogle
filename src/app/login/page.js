'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import api from '@/lib/axiosInstance';
import LoginWithEmail from '@/components/login/LoginWithEmail';
import LoginWithGoogle from '@/components/login/LoginWithGoogle';

function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAccessToken = async () => {
      const token = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (token) {
        router.push('/dashboard');
        return;
      }

      if (refreshToken) {
        try {
          const res = await api.post('http://172.16.8.126:8088/auth/refresh',
            { refreshToken: refreshToken });
          const { accessToken, refreshToken: newRefresh } = res.data.result;

          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', newRefresh);
          router.push('/dashboard');          
        } catch (err) {
          console.error('Unable to refresh token:', err);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
      }
      setChecking(false);
    };

    checkAccessToken();
  }, [router]);

  if (checking) return null;

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
