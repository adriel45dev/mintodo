"use client";
import Header from "./components/Header";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useState } from "react";

type Task = {
  text: string;
  repeat?: boolean;
  date?: string;
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [inputTask, setInputTask] = useState<string>("");

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
    </section>
  );
}
