# AI-Enabled To-Do List Application

A smart task management system designed to help you categorize tasks dynamically based on deadlines, featuring an AI-enabled interface with smooth animations and a floating calendar popup for easy date assignment.

## Application Overview

The **AI-Enabled To-Do List** is a modern task management app built using React, TypeScript, and Node.js. This application allows users to seamlessly categorize their tasks into sections such as **Today**, **Tomorrow**, **This Week**, and **Later**. It includes a floating calendar popup for assigning task dates, and tasks are automatically moved between categories based on the chosen date.

### Key Features

- **Dynamic Task Assignment:** Tasks are automatically moved to the appropriate section (Today, Tomorrow, This Week, or Later) based on the selected date.
- **Floating Calendar Popup:** A responsive and non-intrusive calendar allows for seamless task scheduling without disrupting the website layout.
- **Category View:** View tasks assigned to the current day, the next day, the current week, or any future date beyond the current week.
- **Date Validation:** Prevents the assignment of past dates, ensuring tasks are always scheduled for valid, future dates.
- **Interactive Interface:** Clean, user-friendly design with animations for smooth task handling and calendar interactions.

### Prerequisites

Ensure the following tools are installed on your local machine:

- **Node.js**: For running the backend server.
- **npm or yarn**: For managing project dependencies.
- **React**: Used for the frontend UI.
- **TypeScript**: Type safety and advanced functionality for the project.

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/ai-enabled-todo-app
```

### Install Dependencies

Once you've cloned the repository, navigate into the project directory and install the necessary dependencies:

```bash
npm install
```

or, if you're using yarn:

```bash
yarn install
```

### Running the Application

To start the development server:

```bash
npm start
```

Open the app in your browser at `http://localhost:3000` to view the interface.

### Calendar Pop-up and Task Reassignment Logic

- The calendar popup dynamically floats over the interface without affecting the layout.
- Tasks are categorized as follows:
  - **Today**: Tasks assigned to the current day.
  - **Tomorrow**: Tasks assigned to the next day.
  - **This Week**: Tasks assigned within the current week (Monday to Saturday).
  - **Later**: Tasks assigned beyond the current week.
- **Date Validation**: The system will not allow tasks to be assigned to past dates, and an error message will be displayed for invalid date selections.

### Folder Structure

- **/src**
  - **components**: Contains all the React components such as Task, Calendar, and TaskCategory.
  - **helpers**: Utility functions, including date validation and task reassignment logic.
  - **App.tsx**: Main component housing the entire to-do list.
  - **index.tsx**: Entry point for the React application.

### Contributions

Feel free to submit issues or pull requests on GitHub to help improve the application.

### License

This project is open-source and available under the [MIT License](LICENSE).
