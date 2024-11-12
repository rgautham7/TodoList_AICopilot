# AI-Enabled To-Do List Application

A modern, AI-powered todo list application built with Next.js, TypeScript, and CopilotKit. This application helps users manage tasks efficiently with intelligent categorization, priority settings, and AI assistance for breaking down complex goals into manageable tasks.

## Features

- 🤖 **AI-Powered Task Management**: Integrated CopilotKit helps break down high-level goals into specific tasks
- 📅 **Dynamic Task Categories**: Automatically organizes tasks into Today, Tomorrow, This Week, and Later
- ⭐ **Priority Management**: Set and update task priorities (High, Medium, Low)
- 👥 **Task Assignment**: Assign tasks to specific people
- 📆 **Date Management**: Built-in calendar for setting and updating due dates
- 🎨 **Theme Customization**: Multiple gradient themes to personalize your experience
- 📱 **Responsive Design**: Works seamlessly across desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: CopilotKit
- **Date Management**: React DatePicker
- **UI Components**: Custom components with glassmorphism effects

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- OpenAI API key for CopilotKit integration

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ai-todo-list.git
cd ai-todo-list
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```
OPENAI_API_KEY=your_openai_api_key_here
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── api/
│   ├── components/
│   ├── types/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
└── package.json
```

## Usage

1. **Creating Tasks**
   - Type your task in the input field
   - Press Enter or click "Add Task"
   - Use AI assistance by describing high-level goals

2. **Managing Tasks**
   - Set priority levels (High, Medium, Low)
   - Assign due dates using the calendar
   - Assign tasks to team members
   - Mark tasks as complete
   - Delete tasks when no longer needed

3. **Theme Customization**
   - Click the theme button in the header
   - Choose from available gradient themes
   - Experience real-time theme updates

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [CopilotKit](https://copilotkit.ai) for AI integration
- [Next.js](https://nextjs.org) team for the amazing framework
- [React DatePicker](https://reactdatepicker.com) for date management
- All contributors who have helped shape this project

## Author

Gautham - [@rgautham7](https://twitter.com/rgautham7)

Project Link: [https://github.com/rgautham7/TodoList_AICopilot](https://github.com/rgautham7/TodoList_AICopilot)

---

Made with ❤️ by [Gautham](https://personal-portfolio-two-sooty.vercel.app/)