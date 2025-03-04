'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem('user', 'true'); // Fake login
    router.push('/onboarding'); // Send user to onboarding
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <Button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-2 rounded mt-4 "
        >
          Login
        </Button>
      </div>
    </div>
  );
}
