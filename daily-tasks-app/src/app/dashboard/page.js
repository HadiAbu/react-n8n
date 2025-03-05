'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push('/login'); // Redirect if not logged in
      } else {
        setUser(data.user);
      }
    };

    checkUser();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user?.email}!</h1>
      <Button
        onClick={async () => {
          await supabase.auth.signOut();
          router.push('/login');
        }}
        className="mt-4 bg-red-500 text-white p-2 rounded cursor-pointer"
      >
        Logout
      </Button>
    </div>
  );
}
