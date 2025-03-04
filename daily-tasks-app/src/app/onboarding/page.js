'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Onboarding() {
  const [tasks, setTasks] = useState(['']); // Store example tasks
  const router = useRouter();

  const handleAddTask = () => setTasks([...tasks, '']);
  const handleChange = (index, value) => {
    const newTasks = [...tasks];
    newTasks[index] = value;
    setTasks(newTasks);
  };
  const handleSubmit = () => {
    console.log('Tasks:', tasks);
    router.push('/dashboard'); // Redirect to dashboard after onboarding
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Onboarding</h1>
        <p className="text-center text-gray-600 mb-4">
          {`Enter example tasks you'd like reminders for:`}
        </p>

        {tasks.map((task, index) => (
          <input
            key={index}
            type="text"
            value={task}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="e.g., Read 10 pages of a book"
          />
        ))}

        <Button
          onClick={handleAddTask}
          className="w-full bg-gray-200 p-2 rounded mt-2 "
        >
          + Add Another
        </Button>
        <Button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-2 rounded mt-4 "
        >
          Next
        </Button>
      </div>
    </div>
  );
}
