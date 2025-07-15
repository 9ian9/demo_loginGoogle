'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import api from '@/lib/axiosInstance';

export default function LoginForm() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isLoginFailed, setIsLoginFailed] = useState(false);

    const classLoginDefault = "input border-1 focus-within:ring-1 focus-within:border-none focus-within:outline-none focus-within:shadow-none input w-100 h-12 py-3.5 px-4 rounded-[8]";
    const classLogin = `${classLoginDefault} ${isLoginFailed ? 'border-red-500 focus-within:ring-red-500' : 'focus-within:ring-gray-300'}`;

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await toggleClickSignIn(email, password);
    setIsLoginFailed(false); 
  } catch (error) {
    const code = error?.response?.data?.code;

    if (code === 1004 || code === 1005) {
      setIsLoginFailed(true);
      setFeedback("Email and password you entered is incorrect, Please try again.");
    } else {
      setIsLoginFailed(true);
      setFeedback("An unexpected error occurred. Please try again later.");
    }

    console.error(error);
  }
};


const toggleClickSignIn = async (emailInput, passwordInput) => {
    try {

        const res = await api.post('http://172.16.8.126:8088/auth/local', {
            email: emailInput,
            password: passwordInput
        });

        const { accessToken, refreshToken } = res.data.result;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        
        console.log("accessToken: ", accessToken);
        console.log("refreshToken: ", refreshToken);
        
        router.push('/dashboard');
        return true;
    } catch (err) {
        console.log('Login error:', err);
        return false;
    }
};

    const toggleClickForgotPassword = () => {
        alert("You have forgotten the password");
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
                className={classLogin}
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex flex-col items-start">
                <input
                    className={classLogin}
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isLoginFailed && <p className="text-[#F87171] py-1.5 px-1 text-xs">{feedback}</p>}
                <button type="button" className="text-[#374151] py-1.5 px-1 cursor-pointer text-xs" onClick={toggleClickForgotPassword}>
                    Forgot password
                </button>
            </div>
            <button type="submit" className="btn bg-[#0C376C] text-[#C7D2FE] rounded-[8] h-12 text-xs font-light">
                Sign in
            </button>
        </form>
    );
}
