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
  done?: boolean;
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

  const addTask = () => {
    if (inputTask) {
      if (tasks) {
        setTasks((prevTask) => [{ text: inputTask }, ...prevTask]);
      } else {
        setTasks([{ text: inputTask }]);
      }
      setInputTask("");
    }
  };

  const handleAddButton = () => {
    addTask();
  };

  const handleDelete = (id: number) => {
    const prevTask = [...tasks];
    prevTask.splice(id, 1);
    setTasks(prevTask);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      addTask();
    }
  };

  const handleTaskStatus = (id: number) => {
    setTasks((prevTask) => {
      if (prevTask[id].done) {
        return [
          { ...prevTask[id], done: !prevTask[id].done },
          ...prevTask.filter((_, i) => i != id),
        ];
      } else {
        return [
          ...prevTask.filter((_, i) => i != id),
          { ...prevTask[id], done: !prevTask[id].done },
        ];
      }
    });
  };

  return (
    <section className="flex flex-col items-center space-y-4  min-h-screen">
      <Header />
      <div className="flex flex-col items-center text-white w-full h-fit px-4 space-y-4">
        <TaskInput
          inputTask={inputTask}
          setInputTask={setInputTask}
          onAddTask={handleAddButton}
          onKeyDown={handleKeyDown}
        />

        <TaskList>
          {tasks &&
            tasks.map((task, id) => (
              <Task
                key={id}
                text={task.text}
                onDelete={handleDelete}
                onTaskStatus={handleTaskStatus}
                done={task.done}
                id={id}
              />
            ))}
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
