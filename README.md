# AI-Enabled To-Do List Application

An AI-powered, dynamic to-do list application that helps users manage and categorize tasks seamlessly. The application comes with a modern interface, featuring task sections like "Today," "Tomorrow," "This Week," and "Later," and integrates CopilotKit AI to assist users in breaking down their high-level goals into manageable tasks.

## Application Overview

This AI-Enabled To-Do List application is designed to provide an intuitive task management experience. It is enhanced with CopilotKit AI, allowing users to get personalized assistance in managing their to-do items. The AI suggests task breakdowns, organizes tasks, and ensures that they are categorized appropriately based on the selected due date.

### Key Features

- **Dynamic Date-Based Task Sorting:** Tasks are automatically sorted into "Today," "Tomorrow," "This Week," and "Later" based on the selected due date.
- **Popup Calendar for Date Assignment:** A smooth and floating calendar popup for selecting dates without affecting the layout.
- **AI-Powered Task Management:** Integrated CopilotKit AI provides intelligent assistance in creating and organizing tasks.
- **Task Re-categorization:** Automatically reassign tasks to the appropriate column when the due date is updated.
- **Invalid Date Handling:** Ensures that past dates cannot be selected and prompts an error if attempted.
- **Clean and Modern UI:** Visually appealing and user-friendly interface with animated effects and responsive design.

### Prerequisites

Ensure you have the following installed on your local development machine:

- Node.js
- npm or yarn
- CopilotKit (for AI functionality)

### Setup Instructions

To get started with the AI-Enabled To-Do List Application, follow these steps:

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/AI-Enabled-TodoList.git
```

#### 2. Install Dependencies

Navigate into the project directory and install the necessary dependencies:

```bash
cd AI-Enabled-TodoList
npm install
```

#### 3. Set Up CopilotKit AI

You will need to configure the CopilotKit runtime in the `CopilotKit` component. Ensure that you have set the `runtimeUrl` properly:

```bash
<CopilotKit runtimeUrl="/api/copilotkit">
```

#### 4. Run the Application

To start the application, use the following command:

```bash
npm run dev
```

Once the development server is running, open your browser and navigate to:

```
http://localhost:3000
```

### How to Use

1. **Creating Tasks:** Navigate to the "Create a to-do list" section and start adding tasks.
2. **Assign Dates:** Click the calendar icon next to a task to assign a due date. The date picker will pop up smoothly without disrupting the layout.
3. **AI Assistance:** The AI-powered copilot will assist in managing the tasks. Simply input high-level goals, and the AI will break them down into smaller tasks.
4. **Task Categorization:** Based on the due date selected, the task will automatically move to the appropriate section: "Today," "Tomorrow," "This Week," or "Later."
5. **Invalid Date Selection:** The app will prevent you from selecting past dates and will alert you if an invalid date is chosen.

### Technologies Used

- **Frontend:** React, TypeScript, Tailwind CSS for styling, and CopilotKit for AI functionality.
- **Backend (if any):** Express.js (if needed to support the CopilotKit runtime or other server-side functionalities).
- **AI Integration:** CopilotKit AI, providing intelligent task management assistance.

### CopilotKit AI Functionality

The CopilotKit AI embedded in this application acts as a co-pilot for managing your tasks. It helps:

- Break down tasks based on your high-level goals.
- Provide suggestions for better task organization.
- Assist in automating task categorization and planning.

### Future Enhancements

- **Task Notifications:** Receive reminders for tasks due today or tomorrow.
- **Enhanced AI:** Further improve AI suggestions to handle more complex task dependencies.
- **Mobile Responsiveness:** Enhance mobile UI for better task management on small screens.
