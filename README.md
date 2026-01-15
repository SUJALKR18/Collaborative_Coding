# talent-IQ 🎯

A real-time collaborative coding interview platform with integrated video calling and live code execution.

## Overview

talent-IQ is a full-stack web application designed for conducting technical interviews with real-time collaboration features. Candidates and interviewers can solve coding problems together through a shared code editor, communicate via video/chat, and execute code on the fly to test solutions.

## Features

✨ **Core Features:**

- 🎥 **Real-time Video Calling** - Stream-powered video calls between interviewer and candidate
- 💬 **Live Chat** - Integrated messaging system for real-time communication
- 📝 **Collaborative Code Editor** - Monaco Editor for live code editing with syntax highlighting
- ⚡ **Code Execution** - Piston API integration for running code across multiple languages
- 🎯 **Problem Library** - Pre-curated coding problems with various difficulty levels
- 📊 **Session Management** - Track active and completed interview sessions
- 🔐 **Authentication** - Clerk-powered user authentication and authorization
- 📈 **Statistics Dashboard** - View interview stats and performance metrics

## Tech Stack

### Frontend

- **Framework**: React 19 with React Router
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with DaisyUI
- **Code Editor**: Monaco Editor React
- **Video/Chat**: Stream.io React SDKs
- **State Management**: TanStack React Query
- **UI Components**: Lucide React icons, react-hot-toast notifications
- **Code Execution**: Piston API client

### Backend

- **Runtime**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **Real-time Features**: Stream.io SDKs
- **Workflow Automation**: Inngest
- **Authentication**: Clerk Express
- **Development**: Nodemon for hot reload

## Project Structure

```
talent-IQ/
├── backend/
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   ├── models/            # MongoDB schemas (User, Session)
│   │   ├── routes/            # API endpoints
│   │   ├── middleware/        # Auth & route protection
│   │   ├── lib/               # Utilities (DB, env, Stream, Inngest)
│   │   └── server.js          # Express server entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Page components (Dashboard, Problems, etc.)
│   │   ├── hooks/             # Custom React hooks
│   │   ├── api/               # API client utilities
│   │   ├── lib/               # Helper functions
│   │   ├── data/              # Static data (problems.js)
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # React entry point
│   ├── public/                # Static assets
│   └── package.json
│
└── package.json               # Root package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- MongoDB instance (local or cloud)
- Stream.io API keys
- Clerk authentication keys
- Piston API access (for code execution)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd talent-IQ
   ```

2. **Setup Environment Variables**

   **Backend** (`backend/.env`):

   ```env
   MONGO_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret
   NODE_ENV=development
   ```

   **Frontend** (`frontend/.env`):

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_STREAM_API_KEY=your_stream_api_key
   VITE_API_BASE_URL=http://localhost:5000
   ```

3. **Install Dependencies**

   ```bash
   npm run build
   ```

4. **Start Development Servers**

   **Backend** (from `backend/` directory):

   ```bash
   npm run dev
   ```

   Server runs on `http://localhost:5000`

   **Frontend** (from `frontend/` directory):

   ```bash
   npm run dev
   ```

   App runs on `http://localhost:5173`

## API Endpoints

### Chat Routes (`/api/chat`)

- `POST /chat/message` - Send a message
- `GET /chat/history/:sessionId` - Get chat history

### Session Routes (`/api/sessions`)

- `GET /sessions` - Get all sessions
- `POST /sessions` - Create new session
- `GET /sessions/:id` - Get session details
- `PUT /sessions/:id` - Update session
- `DELETE /sessions/:id` - Delete session

## Key Components

### Frontend Components

- **VideoCallUI** - Main video conference interface
- **CodeEditorPanel** - Monaco editor for coding
- **OutputPanel** - Display code execution results
- **ProblemDescription** - Problem statement display
- **ActiveSessions** - List of ongoing sessions
- **CreateSessionModal** - Modal for creating new sessions
- **Navbar** - Navigation and user menu
- **StatsCards** - Performance statistics

### Pages

- **HomePage** - Landing page
- **DashboardPage** - Main dashboard with active sessions
- **ProblemsPage** - Browse available problems
- **ProblemPage** - Detailed problem view
- **SessionPage** - Active interview session

## Available Scripts

### Root Level

- `npm run build` - Install all dependencies and build frontend
- `npm run start` - Start backend server

### Backend (`backend/`)

- `npm run dev` - Start dev server with hot reload
- `npm start` - Start production server

### Frontend (`frontend/`)

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Features in Detail

### Real-time Collaboration

- Interviewers and candidates share a live code editor
- Changes are synchronized in real-time using Stream.io
- Video calls powered by Stream.io for HD quality

### Problem Solving

- Browse from a curated library of coding problems
- Problems include difficulty levels and categories
- Starter code templates for various languages
- Detailed examples and constraints

### Code Execution

- Execute code directly in the editor
- Support for multiple programming languages
- Instant feedback on code output
- Error messages and debugging info

### Session Management

- Create and manage interview sessions
- Track interview history
- Store solutions and notes
- Session analytics

## Authentication

The application uses Clerk for authentication:

- Sign up / Sign in with email
- Protected routes via middleware
- User profile management
- Session-based authentication

## Database Models

### User

- Email, profile info
- Authentication metadata
- Interview history

### Session

- Participant details
- Problem reference
- Code solutions
- Timestamps and status

## Troubleshooting

### Port Already in Use

- Change port in backend/server.js or frontend vite.config.js
- Or kill the process using the port: `lsof -ti:5000 | xargs kill`

### MongoDB Connection Issues

- Verify MongoDB is running
- Check connection string in `.env`
- Ensure IP whitelist includes your current IP (for cloud MongoDB)

### Stream.io/Clerk Keys Not Working

- Double-check API keys in `.env`
- Verify keys haven't expired
- Check Stream.io/Clerk dashboards for restrictions

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Support

For issues and feature requests, please open an issue on GitHub.

---

**Built with ❤️ for better technical interviews**
