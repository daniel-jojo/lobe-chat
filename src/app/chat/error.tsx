'use client';

// Error components must be Client Components
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  console.error(error);

  useEffect(() => {
    // Redirect to the homepage after a short delay or immediately
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000); // 2000 ms delay for redirecting

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        type="button"
      >
        Try again
      </button>
    </div>
  );
}
