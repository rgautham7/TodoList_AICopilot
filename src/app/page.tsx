"use client";
import Header from "./components/Header";
import TypingHeading from "./components/TypingHeading";
import { TodoList } from "./components/TodoList";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  const setGradient = (gradient: string) => {
    document.documentElement.style.setProperty('--background-gradient', gradient);
  };
  return (
    <>
      <Header />
      <hr />
      <TypingHeading />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl text-white font-bold mb-4 text-center">
          Create a to-do list
        </h1>
        <CopilotKit runtimeUrl="/api/copilotkit">
        <TodoList />
        <CopilotPopup
          instructions={
            "Help the user manage a todo list. If the user provides a high level goal, " +
            "break it down into a few specific tasks and add them to the list"
          }
          defaultOpen={true}
          labels={{
            title: "Todo List Copilot",
            initial: "Hi you! 👋 I can help you manage your todo list.",
          }}
          clickOutsideToClose={true}
        />
        </CopilotKit>
      </div>
    </>
  );
}