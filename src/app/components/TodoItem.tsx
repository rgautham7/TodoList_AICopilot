"use client";

import { PriorityButton } from "./PriorityButton";
import { Priority, Todo } from "../types/todo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  assignPerson: (id: string, person: string | null) => void;
  assignDate: (id: string, date: Date | null) => void;
  updatePriority: (id: string, priority: Priority) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
  assignPerson,
  assignDate,
  updatePriority,
}) => {
  return (
    <div className="todo-item">
    <div className="todo-item-content">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleComplete(todo.id)}
          className="checkbox"
        />
        <span className={`text-lg ${todo.isCompleted ? "line-through text-gray-500" : ""}`}>
          {todo.text}
        </span>
      </div>
      
      <div className="todo-item-actions">
        <DatePicker
          selected={todo.assignedDate}
          onChange={(date: Date | null) => assignDate(todo.id, date)}
          className="date-picker"
          placeholderText="Set date"
          dateFormat="MM/dd/yyyy"
        />
        
        <input
          type="text"
          value={todo.assignedTo || ""}
          onChange={(e) => assignPerson(todo.id, e.target.value)}
          placeholder="Assign to"
          className="assign-input"
        />
        
        <div className="todo-item-footer">
          <div className="actions-right">
            <PriorityButton
              currentPriority={todo.priority}
              onPriorityChange={(priority) => updatePriority(todo.id, priority)}
            />
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
};