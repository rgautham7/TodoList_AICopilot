import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  assignPerson: (id: string, person: string | null) => void;
  assignDate: (id: string, date: Date | null) => void;
  hasBorder?: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
  assignPerson,
  assignDate,
  hasBorder,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  
  const handleDateChange = (date: Date | null) => {
    assignDate(todo.id, date);
    setShowCalendar(false);
  };

  return (
    <div className={"flex items-center justify-between px-4 py-2 group" + (hasBorder ? " border-b" : "")}>
      <div className="flex items-center">
        <input
          className="h-5 w-5 text-blue-500"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleComplete(todo.id)}
        />
        <span className={`ml-2 text-sm ${todo.isCompleted ? "text-gray-500 line-through" : "text-black-700"}`}>
          
          <span className="ml-2">
          {todo.text}
          <br />
          {todo.assignedTo && (
            <span className="border rounded-md text-xs py-[2px] px-1 mr-2 border-purple-700 uppercase bg-purple-400 text-black font-semibold">
              {todo.assignedTo}
            </span>
          )}
          </span>
        </span>
      </div>

      <div className="flex items-center">
        <button onClick={() => setShowCalendar(!showCalendar)} className="text-orange-600">
          <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" strokeWidth={1}>
            <path d="M8 7h8M7 10h1m1 0h8M3 13h18m-9 0v7M8 3v1m8-1v1m-9 4h10M5 3h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
          </svg>
        </button>

        {showCalendar && (
          <DatePicker
            selected={todo.assignedDate}
            onChange={handleDateChange}
            minDate={new Date()} // Prevent selecting past dates
            inline
          />
        )}

        <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 opacity:0 group-hover:opacity-100 transition-opacity duration-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                </svg>
            </button>
            <button
            onClick={() => {
                const name = prompt("Assign person to this task: ");
                assignPerson(todo.id, name);
            }}
            className="ml-2 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                </svg>
            </button>
      </div>
    </div>
  );
};
