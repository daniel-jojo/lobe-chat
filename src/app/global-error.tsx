'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function GlobalError() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage after a short delay or immediately
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000); // 2000 ms delay for redirecting

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <html>
      <body>
        <h2> Something went wrong</h2>
      </body>
    </html>
  );
}
