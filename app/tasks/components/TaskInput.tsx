"use client";
import Tooltip from "@/app/components/Tooltip";
import Image from "next/image";
import React, { useState } from "react";
import RepeateIcon from "@/public/icons/RepeatIcon";
import CalendarIcon from "@/public/icons/CalendarIcon";

interface TaskInputProps {
  setInputTask: (value: string) => void;
  onAddTask: () => void;
  inputTask: string;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export default function TaskInput({
  inputTask,
  setInputTask,
  onAddTask,
  onKeyDown,
}: TaskInputProps) {
  const handleInputTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) setInputTask(e.target.value);
  };

  return (
    <div className="flex flex-col mx-auto w-full ">
      <div className="group flex flex-row justify-between gap-3 items-center bg-slate-600 rounded-t-2xl h-full px-3 py-4">
        <Image
          src={"/images/login.png"}
          alt="task"
          width={32}
          height={32}
          className="group-hover:rotate-45"
        />
        <input
          type="text"
          className="text-gray-200 w-full h-full bg-slate-600 outline-none border-none"
          placeholder="Add a task"
          onChange={handleInputTask}
          onKeyDown={(e) => onKeyDown(e)}
          value={inputTask}
        />
      </div>

      <div
        id="actions"
        className="flex flex-row justify-between items-center bg-slate-700 rounded-b-2xl h-full py-2 px-3"
      >
        <div className="flex flex-row gap-3">
          <Tooltip message="Add due date">
            <CalendarIcon className="text-white w-6 h-6 hover:text-green-500" />
          </Tooltip>

          <Tooltip message="Repeat">
            <RepeateIcon className="text-white w-6 h-6 hover:text-green-500" />
          </Tooltip>
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
