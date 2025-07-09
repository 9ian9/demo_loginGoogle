'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GoogleCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState(null);

  useEffect(() => {
    const code = searchParams.get('code');
    if (!code) return;
    
    const exchangeCode = async () => {
      try {
        const response = await fetch('http://172.16.8.126:8088/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Backend error: ${response.status}`);
      }

        const data = await response.json();
        console.log('Backend response:', data);

        localStorage.setItem('access_token', data.accesstoken);
        localStorage.setItem('refresh_token', data.refreshtoken);
        router.push("/dashboard/recruitment")
      } 
      catch (err) {
        console.error('OAuth2 exchange error:', err.message);
        setError(err.message);
        router.push("/login")
      }
    };

    exchangeCode();
  }, [searchParams, router]);

  return (
    <>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </>
  );
}

