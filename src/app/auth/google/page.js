'use client';

import { API_BASE_URL } from '@/lib/config';
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
        const response = await fetch(
          API_BASE_URL + `/auth/google?code=${encodeURIComponent(code)}`,
          {
            method: 'POST',
          },
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || `Backend error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        if (data.result.authenticated) {
          localStorage.setItem('accessToken', data.result.accessToken);
          localStorage.setItem('refreshToken', data.result.refreshToken);
          router.push('/dashboard/recruitment');
        }
      } catch (err) {
        console.error('OAuth2 exchange error:', err.message);
        setError(err.message);
        router.push('/login');
      }
    };

    exchangeCode();
  }, [searchParams, router]);

  return null;
}
