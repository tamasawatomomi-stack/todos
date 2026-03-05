"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTasks([...tasks, trimmed]);
    setInput("");
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#d0eaf5] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-[#2a7ea8] mb-6">
          Tomomi&apos;s Todo App
        </h1>

        {/* 入力エリア */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="タスクを入力..."
            className="flex-1 rounded-lg border border-[#a8d8ea] px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#2a7ea8] placeholder-gray-400"
          />
          <button
            onClick={addTask}
            className="rounded-lg bg-[#2a7ea8] px-4 py-2 text-sm font-medium text-white hover:bg-[#236a8e] transition-colors"
          >
            追加
          </button>
        </div>

        {/* タスク一覧 */}
        {tasks.length === 0 ? (
          <p className="text-center text-sm text-gray-400">タスクがありません</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between rounded-lg bg-[#f0f9ff] px-4 py-3 text-sm text-gray-700"
              >
                <span>{task}</span>
                <button
                  onClick={() => removeTask(index)}
                  className="ml-4 text-gray-400 hover:text-red-400 transition-colors text-lg leading-none"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
