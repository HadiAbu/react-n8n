'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    'Write 200 words',
    'Go for a 10-minute walk',
    'Plan tomorrow’s tasks',
  ]);

  const handleComplete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove completed task
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">{`Today's Tasks`}</h1>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-600">All tasks completed! 🎉</p>
        ) : (
          tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border rounded mb-2"
            >
              <span>{task}</span>
              <Button
                onClick={() => handleComplete(index)}
                className="text-green-600 font-bold "
              >
                ✔
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
