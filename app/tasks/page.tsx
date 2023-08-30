"use client";
import Header from "./components/Header";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";

type Task = {
  text: string;
  repeat?: boolean;
  date?: string;
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [inputTask, setInputTask] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (tasks) {
        const tasksJSON = JSON.stringify(tasks);
        localStorage.setItem("data__tasks", tasksJSON);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [tasks]);

  useEffect(() => {
    const tasksJSON = localStorage.getItem("data__tasks");
    if (tasksJSON) {
      const data = JSON.parse(tasksJSON);
      setTasks(data);
    }
  }, []);

  const handleAddButton = () => {
    if (inputTask) {
      if (tasks) {
        setTasks((prevTask) => [...prevTask, { text: inputTask }]);
      } else {
        setTasks([{ text: inputTask }]);
      }
      setInputTask("");
    }
  };

  return (
    <section className="flex flex-col items-center space-y-4  min-h-screen">
      <Header />
      <div className="flex flex-col items-center text-white w-full h-fit px-4 space-y-4">
        <TaskInput
          inputTask={inputTask}
          setInputTask={setInputTask}
          onAddTask={handleAddButton}
        />

        <TaskList>
          {tasks &&
            tasks.map((task) => <Task key={task.text} text={task.text} />)}
        </TaskList>
      </div>
      <button
        onClick={() => setTasks([])}
        type="button"
        className=" border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-900"
      >
        Clear All
      </button>
    </section>
  );
}
