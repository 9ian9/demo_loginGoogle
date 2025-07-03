'use client';

import { useState } from "react";

export default function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isLoginFailed, setIsLoginFailed] = useState(false);
    const classLoginDefault = "input border-1 focus-within:ring-1 focus-within:border-none focus-within:outline-none focus-within:shadow-none input w-100 h-12 py-3.5 px-4 rounded-[8]";
    const classLogin = `${classLoginDefault} ${isLoginFailed ? 'border-red-500 focus-within:ring-red-500' : 'focus-within:ring-gray-300'}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = onLogin(email, password);
        if (success) {
            setIsLoginFailed(false);
        } else {
            setIsLoginFailed(true);
            setFeedback("Email and password you entered is incorrect, Please try again.");
        }
    };

    const toggleClickForgotPassword = () => {
        alert("Ban da nhan quen mat khau");
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
