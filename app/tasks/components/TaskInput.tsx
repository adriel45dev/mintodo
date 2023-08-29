"use client";
import Image from "next/image";
import React, { useState } from "react";

interface TaskInputProps {
  setInputTask: (value: string) => void;
  onAddTask: () => void;
  inputTask: string;
}

export default function TaskInput({
  inputTask,
  setInputTask,
  onAddTask,
}: TaskInputProps) {
  const handleInputTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) setInputTask(e.target.value);
  };

  return (
    <div className="flex flex-col mx-auto w-full ">
      <div
        id="input"
        className="group flex flex-row justify-between gap-3 items-center bg-slate-600 rounded-t-2xl h-full px-3 py-4"
      >
        <Image
          src={"/images/login.png"}
          alt="task"
          width={32}
          height={32}
          className="group-hover:rotate-45"
        />
        <input
          type="text"
          className="text-gray-200 w-full h-full bg-slate-600 outline-none"
          placeholder="Add a task"
          onChange={handleInputTask}
          value={inputTask}
        />
      </div>

      <div
        id="actions"
        className="flex flex-row justify-between items-center bg-slate-700 rounded-b-2xl h-full py-2 px-3"
      >
        <div className="flex flex-row gap-3">
          <button>
            <Image
              src={"/images/calendar.svg"}
              alt="calendar"
              width={28}
              height={28}
              className="hover:scale-125"
            />
          </button>
          <button>
            <Image
              src={"/images/repeat.svg"}
              alt="calendar"
              width={20}
              height={20}
              className="hover:scale-125"
            />
          </button>
        </div>
        <div>
          <button
            className="bg-green-700 rounded-md px-3 py-1 hover:bg-green-800"
            onClick={onAddTask}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
