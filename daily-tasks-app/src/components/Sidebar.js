'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => authListener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <aside
      className={`bg-gray-800 text-white p-4 transition-all h-screen fixed top-0 left-0 ${
        isCollapsed ? 'w-20' : 'w-60'
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="bg-gray-600 p-2 rounded mb-4 hover:bg-gray-500 transition-all"
      >
        {isCollapsed ? '➡' : '⬅'}
      </button>

      <nav className="space-y-4">
        {user ? (
          <>
            <Link
              href="/dashboard"
              className={`block hover:underline ${
                isCollapsed ? 'text-xs' : ''
              }`}
            >
              📋 Dashboard
            </Link>
            <Link
              href="/settings"
              className={`block hover:underline ${
                isCollapsed ? 'text-xs' : ''
              }`}
            >
              ⚙️ Settings
            </Link>
            <button
              onClick={handleLogout}
              className={`mt-4 w-full bg-red-500 p-2 rounded cursor-pointer ${
                isCollapsed ? 'text-xs' : ''
              }`}
            >
              🚪 Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="block hover:underline bg-blue-600 p-2 rounded text-center"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="block hover:underline bg-green-600 p-2 rounded text-center"
            >
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </aside>
  );
}
