import React from "react";

interface TaskListProps {
  children: React.ReactNode;
}

export default function TaskList({ children }: TaskListProps) {
  return (
    <div className="flex flex-col items-center w-full h-full">{children}</div>
  );
}
