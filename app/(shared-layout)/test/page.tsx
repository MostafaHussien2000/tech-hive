"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function TestPage() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="p-4">
      {tasks?.map((task) => (
        <p key={task._id}>
          {task.text}
          {" - "}
          <span className="text-xs">
            ({task.isCompleted ? "Completed" : "Not Completed"})
          </span>
        </p>
      ))}
    </div>
  );
}
