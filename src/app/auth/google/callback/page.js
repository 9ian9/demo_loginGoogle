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
        const response = await fetch('http://172.16.8.126:8080/api/v1/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
          credentials: 'include',
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Backend returned an error.');
        }

        console.log('Backend response:', data);

        // if (data.success) {
        //   await saveToken();
        //   router.push('/home');
        // } 
        // else {
        //   router.push('/login');
        // }
        
      } 
      catch (err) {
        console.error('OAuth2 exchange error:', err.message);
        setError(err.message);
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

// async function saveToken() {
//   try {
//     const response = await fetch('/api', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Failed to fetch token.');
//     }

//     const data = await response.json();

//     localStorage.setItem('access_token', data.access_token);
//     localStorage.setItem('refresh_token', data.refresh_token);
//   } catch (err) {
//     console.error('Token fetch error:', err.message);
//   }
// }
