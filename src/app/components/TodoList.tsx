"use client";

import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";
import { useState } from "react";
import { Todo } from "../types/todo";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  useCopilotReadable({
    description: "The user's todo list.",
    value: todos,
  });

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const weekEnd = new Date(today);
  weekEnd.setDate(today.getDate() + 7);

  // Filter tasks based on the date
  const todayTasks = todos.filter(
    (todo) => todo.assignedDate?.toDateString() === today.toDateString()
  );
  const tomorrowTasks = todos.filter(
    (todo) => todo.assignedDate?.toDateString() === tomorrow.toDateString()
  );
  const thisWeekTasks = todos.filter(
    (todo) =>
      todo.assignedDate && todo.assignedDate > tomorrow && todo.assignedDate <= weekEnd
  );
  const laterTasks = todos.filter(
    (todo) => todo.assignedDate && todo.assignedDate > weekEnd
  );

  // Copilot Actions: Update Todo List
  useCopilotAction({
    name: "updateTodoList",
    description: "Update the user's todo list.",
    parameters: [
      {
        name: "items",
        type: "object[]",
        description: "The new and updated todo list items.",
        attributes: [
          { name: "id", type: "string", description: "The id of the todo item." },
          { name: "text", type: "string", description: "The text of the todo item." },
          { name: "isCompleted", type: "boolean", description: "Whether the todo item is completed or not." },
          { name: "assignedTo", type: "string", description: "The user who is assigned to this todo item.", required: true },
        ],
      },
    ],
    handler: ({ items }) => {
      const newTodos = [...todos];
      for (const item of items) {
        const index = newTodos.findIndex((todo) => todo.id === item.id);
        index !== -1 ? (newTodos[index] = item) : newTodos.push(item);
      }
      setTodos(newTodos);
    },
    render: "Updating the todo list...",
  });

  // Copilot Actions: Delete Todo
  useCopilotAction({
    name: "deleteTodo",
    description: "Delete a todo item",
    parameters: [{ name: "id", type: "string", description: "The id of the todo item to delete." }],
    handler: ({ id }) => setTodos(todos.filter((todo) => todo.id !== id)),
    render: "Deleting a todo item...",
  });

  // Adding a new todo
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: nanoid(), text: input.trim(), isCompleted: false, assignedDate: today }]);
      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => e.key === "Enter" && addTodo();

  // Toggle completion of a todo
  const toggleComplete = (id: string) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));

  // Delete a todo item
  const deleteTodo = (id: string) => setTodos(todos.filter((todo) => todo.id !== id));

  // Assign person to a todo
  const assignPerson = (id: string, person: string | null) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, assignedTo: person || undefined } : todo)));

  // Assign date to a todo
  const assignDate = (id: string, date: Date | null) =>
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, date } : todo)));

  return (
    <>
    <div className="container-glassmorphism p-4">
      <div className="flex mb-4">
        <input
          className="border rounded-md p-2 flex-1 mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="bg-blue-500 rounded-md p-2 text-white" onClick={addTodo}>
          Add Todo
        </button>
      </div>
    </div>

      {/* Task sections */}
      <div className="todo-container">
        <div className="card-container">
          {/* Today's Tasks */}
          <div className="task-card">
            <h2>Today's Tasks</h2>
            <hr />
            {todayTasks.length > 0 ? (
              todayTasks.map((task) => (
                <TodoItem
                  key={task.id}
                  todo={task}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  assignPerson={assignPerson}
                  assignDate={assignDate}
                />
              ))
            ) : (
              <p>No tasks Today!</p>
            )}
          </div>

          {/* Tomorrow's Tasks */}
          <div className="task-card">
            <h2>Tomorrow's Tasks</h2>
            <hr />
            {tomorrowTasks.length > 0 ? (
              tomorrowTasks.map((task) => (
                <TodoItem
                  key={task.id}
                  todo={task}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  assignPerson={assignPerson}
                  assignDate={assignDate}
                />
              ))
            ) : (
              <p>No tasks for Tomorrow</p>
            )}
          </div>

          {/* This Week's Tasks */}
          <div className="task-card">
            <h2>This Week's Tasks</h2>
            <hr />
            {thisWeekTasks.length > 0 ? (
              thisWeekTasks.map((task) => (
                <TodoItem
                  key={task.id}
                  todo={task}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  assignPerson={assignPerson}
                  assignDate={assignDate}
                />
              ))
            ) : (
              <p>No task this Week</p>
            )}
          </div>

          {/* Later Tasks */}
          <div className="task-card">
            <h2>Later Tasks</h2>
            <hr />
            {laterTasks.length > 0 ? (
              laterTasks.map((task) => (
                <TodoItem
                  key={task.id}
                  todo={task}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  assignPerson={assignPerson}
                  assignDate={assignDate}
                />
              ))
            ) : (
              <p>No tasks for later!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
