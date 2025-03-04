'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user'); // Fake auth check for now
    const onboardingDone = localStorage.getItem('onboardingDone');

    if (!user) {
      router.replace('/login');
    } else if (!onboardingDone) {
      router.replace('/onboarding');
    } else {
      router.replace('/dashboard');
    }
  }, []);

  return null; // Empty component since we're just redirecting
}
