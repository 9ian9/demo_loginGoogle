'use client';

import { CONFIG } from '@/lib/config';
import { iconLogin } from '../../../public/icon/iconLogin';

export default function LoginWithGoogle() {
  function getAuthUrl() {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

    const options = {
      redirect_uri: CONFIG.REDIRECT_URI,
      client_id: CONFIG.GOOGLE_CLIENT_ID,
      response_type: 'code',
      scope: 'openid email profile',
      prompt: 'login',
    };

    console.log(options);

    const queryParam = new URLSearchParams(options);
    return `${rootUrl}?${queryParam.toString()}`;
  }

  return (
    <>
      <button
        className="btn bg-white text-black border-[#e5e5e5]"
        onClick={() => (window.location.href = getAuthUrl())}
      >
        {iconLogin.iconGoogle}
        Login with Google
      </button>
    </>
  );
}
