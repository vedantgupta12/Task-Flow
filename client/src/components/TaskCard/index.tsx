import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-gray-700 dark:bg-dark-secondary dark:text-white">
      <div className="space-y-4">

        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">ID: {task.id}</div>
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-800 dark:text-blue-100">
            {task.priority}
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{task.title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {task.description || "No description provided"}
          </p>
        </div>

        {/* Tags / Status */}
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="rounded bg-gray-100 px-2 py-0.5 font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            Status: {task.status}
          </span>
          {task.tags && (
            <span className="rounded bg-green-100 px-2 py-0.5 font-medium text-green-700 dark:bg-green-800 dark:text-green-100">
              Tags: {task.tags}
            </span>
          )}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div>
            <span className="font-semibold">Start Date:</span>{" "}
            {task.startDate ? format(new Date(task.startDate), "MMM d, yyyy") : "Not set"}
          </div>
          <div>
            <span className="font-semibold">Due Date:</span>{" "}
            {task.dueDate ? format(new Date(task.dueDate), "MMM d, yyyy") : "Not set"}
          </div>
        </div>

        {/* Author & Assignee */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div>
            <span className="font-semibold">Author:</span>{" "}
            {task.author?.username || "Unknown"}
          </div>
          <div>
            <span className="font-semibold">Assignee:</span>{" "}
            {task.assignee?.username || "Unassigned"}
          </div>
        </div>

        {/* Attachments */}
        {task.attachments && task.attachments.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">Attachments:</h4>
            <div className="overflow-hidden rounded-md border border-gray-300 dark:border-gray-600 w-fit">
              <Image
                src={`/${task.attachments[0].fileURL}`}
                alt={task.attachments[0].fileName}
                width={400}
                height={200}
                className="rounded-md object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
