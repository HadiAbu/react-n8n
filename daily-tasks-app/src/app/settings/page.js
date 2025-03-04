'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Settings() {
  const [time, setTime] = useState('08:00');

  const handleSave = () => {
    console.log('Notification Time:', time);
    alert('Settings saved!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Settings</h1>
        <label className="block mb-2 text-gray-700">
          Daily Task Notification Time:
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <Button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white p-2 rounded "
        >
          Save
        </Button>
      </div>
    </div>
  );
}
