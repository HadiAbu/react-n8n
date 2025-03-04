'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to track if sidebar is collapsed
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear(); // Clear auth data
    router.push('/login'); // Redirect to login page
  };

  return (
    <aside
      className={`bg-gray-800 text-white p-4 transition-all ${
        isCollapsed ? 'w-20' : 'w-60'
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)} // Toggle sidebar visibility
        className="bg-gray-600 p-2 rounded mb-4 hover:bg-gray-500 transition-all"
      >
        {isCollapsed ? '➡' : '⬅'} {/* Toggle Arrow */}
      </button>

      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className={`block hover:underline ${isCollapsed ? 'text-xs' : ''}`}
        >
          📋 Dashboard
        </Link>
        <Link
          href="/settings"
          className={`block hover:underline ${isCollapsed ? 'text-xs' : ''}`}
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
      </nav>
    </aside>
  );
}
