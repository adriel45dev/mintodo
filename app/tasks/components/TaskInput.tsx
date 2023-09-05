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

  const [repeatAction, setRepeatAction] = useState(false);

  return (
    <div className="flex flex-col mx-auto w-full ">
      <div className="group flex flex-row justify-between gap-3 items-center bg-slate-600 rounded-t-2xl h-full px-3 py-4">
        <Image
          src={"/images/login.png"}
          alt="task"
          width={32}
          height={32}
          className="group-hover:rotate-45 "
        />
        <input
          type="text"
          className=" text-gray-200 w-full h-full bg-slate-600 border-none "
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
            <CalendarIcon className="text-white w-6 h-6 hover:text-green-500 hover:scale-90" />
          </Tooltip>

          <div
            className="relative flex justify-center "
            onClick={() => setRepeatAction(!repeatAction)}
          >
            <Tooltip message="Repeat">
              <RepeateIcon
                className={` w-6 h-6 hover:text-green-500 hover:scale-90 ${
                  repeatAction ? "text-green-500" : "text-white"
                }`}
              />
            </Tooltip>

            <div
              className={`${
                repeatAction && "scale-100"
              } absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-sm text-white flex flex-col z-10`}
            >
              <button className="hover:text-green-400">Daily</button>
              <button className="hover:text-green-400">Weekly</button>
              <button className="hover:text-green-400">Monthly</button>
              <button className="hover:text-green-400">Yearly</button>
            </div>
          </div>
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
