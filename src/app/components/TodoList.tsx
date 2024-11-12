"use client";

import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";
import { useState } from "react";
import { Priority, Todo } from "../types/todo";
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


  // Copilot Actions
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
      newTodos.forEach((todo, index) => {
        const foundItem = items.find(item => item.id === todo.id);
        if (foundItem) {
          newTodos[index] = { ...foundItem, priority: todo.priority };
        }
      });
      setTodos(newTodos);
    },
    render: "Updating the todo list...",
  });

  const updatePriority = (id: string, priority: Priority) => {
    setTodos(prevTodos => {
      const newTodos = prevTodos.map(todo =>
        todo.id === id ? { ...todo, priority } : todo
      );
      return sortByPriority(newTodos);
    });
  };

  const sortByPriority = (todos: Todo[]) => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1, null: 0 };
    return [...todos].sort((a, b) => {
      const priorityA = priorityOrder[a.priority || 'null'];
      const priorityB = priorityOrder[b.priority || 'null'];
      return priorityB - priorityA;
    });
  };

  // Adding a new todo
  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        id: nanoid(),
        text: input.trim(),
        isCompleted: false,
        assignedDate: today,
        priority: null as Priority
      };
      setTodos(prevTodos => sortByPriority([...prevTodos, newTodo]));
      setInput("");
    }
  };

    // Filter tasks based on the date
    const todayTasks = sortByPriority(todos.filter(
      (todo) => todo.assignedDate?.toDateString() === today.toDateString()
    ));
    const tomorrowTasks = sortByPriority(todos.filter(
      (todo) => todo.assignedDate?.toDateString() === tomorrow.toDateString()
    ));
    const thisWeekTasks = sortByPriority(todos.filter(
      (todo) =>
        todo.assignedDate && todo.assignedDate > tomorrow && todo.assignedDate <= weekEnd
    ));
    const laterTasks = sortByPriority(todos.filter(
      (todo) => todo.assignedDate && todo.assignedDate > weekEnd
    ));
  

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
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, assignedDate: date || undefined } : todo)));

  return (
    <div className="space-y-6">
      <div className="max-w-2xl mx-auto">
      <div className="container-glassmorphism p-6 mb-8">
        <div className="flex gap-4">
          <input
            className="todo-input"
            value={input}
            placeholder="What needs to be done?"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="add-button" onClick={addTodo}>
            Add Task
          </button>
        </div>
      </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Today's Tasks */}
        <div className="task-card">
          <h2 className="category-header">
            Today&apos;s Tasks
            <span className="task-count">{todayTasks.length}</span>
          </h2>
          {todayTasks.length > 0 ? (
            todayTasks.map((task) => (
              <TodoItem
                key={task.id}
                todo={task}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                assignPerson={assignPerson}
                assignDate={assignDate}
                updatePriority={updatePriority}
              />
            ))
          ) : (
            <p className="text-gray-400">No tasks for today</p>
          )}
        </div>

        {/* Tomorrow's Tasks */}
        <div className="task-card">
          <h2 className="category-header">
            Tomorrow&apos;s Tasks
            <span className="task-count">{tomorrowTasks.length}</span>
          </h2>
          {tomorrowTasks.length > 0 ? (
            tomorrowTasks.map((task) => (
              <TodoItem
                key={task.id}
                todo={task}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                assignPerson={assignPerson}
                assignDate={assignDate}
                updatePriority={updatePriority}
              />
            ))
          ) : (
            <p className="text-gray-400">No tasks for tomorrow</p>
          )}
        </div>

        {/* This Week's Tasks */}
        <div className="task-card">
          <h2 className="category-header">
            This Week&apos;s Tasks
            <span className="task-count">{thisWeekTasks.length}</span>
          </h2>
          {thisWeekTasks.length > 0 ? (
            thisWeekTasks.map((task) => (
              <TodoItem
                key={task.id}
                todo={task}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                assignPerson={assignPerson}
                assignDate={assignDate}
                updatePriority={updatePriority}
              />
            ))
          ) : (
            <p className="text-gray-400">No tasks this week</p>
          )}
        </div>

        {/* Later Tasks */}
        <div className="task-card">
          <h2 className="category-header">
            Later Tasks
            <span className="task-count">{laterTasks.length}</span>
          </h2>
          {laterTasks.length > 0 ? (
            laterTasks.map((task) => (
              <TodoItem
                key={task.id}
                todo={task}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                assignPerson={assignPerson}
                assignDate={assignDate}
                updatePriority={updatePriority}
              />
            ))
          ) : (
            <p className="text-gray-400">No tasks scheduled for later</p>
          )}
        </div>
      </div>
    </div>
  );
};