# 🤖 AI Persona Chat

AI Persona Chat is a modern AI-powered mentorship platform that connects users with personalized AI personas for technical guidance and life wisdom. Featuring Hitesh Sir for programming expertise and Piyush Sir for career insights, wrapped in a stunning glassmorphism UI with gradient backgrounds and floating particle animations.

## 🚀 How to Run the Project

### Frontend

1. Clone the repository
```bash
git clone <repo-url>
```
2. Clone the repository
```bash
cd client
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

### Backend

1. Navigate to backend directory
```bash
cd backend
```

2. Install backend dependencies
```bash
npm install
```

3. Start the backend server
```bash
npm run dev
```

## 📅 Average Time to Complete
**8–10 hours**
(Including persona design, modern UI implementation, API integration, and user API key management system.)

## 📚 Lessons Learned

- Building conversational AI interfaces with context-aware chat history.
- Implementing user-provided API key system to eliminate backend costs.
- Creating glassmorphism UI effects with backdrop blur and transparency layers.
- Designing persona-specific themes with unique color gradients and branding.
- Building responsive chat interfaces with auto-scroll and message threading.
- Implementing real-time typing indicators and smooth message animations.

## 🛠️ Tech Stack

### Frontend
- **React** – Component-based UI library with hooks
- **React Router** – Client-side navigation between personas
- **Tailwind CSS** – Utility-first styling with custom gradients
- **Lucide React** – Modern icon library for UI elements
- **CSS Animations** – Floating particles and smooth transitions

### Backend
- **Node.js** – Runtime environment for server
- **Express.js** – Web framework for API routes
- **OpenAI API** – GPT integration for AI conversations
- **CORS** – Cross-origin resource sharing middleware

## 🎨 Design Features

- **Gradient Backgrounds** – `from-slate-900 via-purple-900 to-slate-900`
- **Floating Particles** – Animated ambient elements with random positioning
- **Glassmorphism Cards** – Backdrop blur effects with transparency
- **Persona-Specific Theming:**
  - **Hitesh Sir:** Pink/Purple gradients for tech mentorship
  - **Piyush Sir:** Cyan/Blue gradients for life coaching
- **Interactive Animations** – Hover effects, scale transforms, and glow states

## 🚀 Live Demo
🔗 [Live Demo Here](https://ai-persona-chat-bot.vercel.app/)

## 📸 Screenshots

### Landing Page
Modern glassmorphism cards with gradient backgrounds and floating particles
<img width="1893" height="980" alt="image" src="https://github.com/user-attachments/assets/aa53a50b-d5bb-4add-9b33-b778b570247c" />
<img width="1919" height="981" alt="image" src="https://github.com/user-attachments/assets/839a27f1-6f21-4ec7-8410-6560de73ea97" />


### Chat Interface - Hitesh Sir
Technical mentorship with code review suggestions and career guidance
<img width="1895" height="981" alt="image" src="https://github.com/user-attachments/assets/7bd29994-cbcc-40ee-a1de-54c05df120cd" />


### Chat Interface - Piyush Sir
Technical mentorship with code review suggestions and career guidance
<img width="1898" height="997" alt="image" src="https://github.com/user-attachments/assets/208f27bd-890d-4249-9d4c-bed669d709e7" />


### API Key Modal
Secure user authentication with session-based storage

## 💡 How It Works
### 1. Persona Selection
- Choose between Hitesh Sir (Tech Mentor) or Piyush Sir (Life Coach)
- Each persona has unique personality, expertise area, and visual theme

### 2. AI Conversations
- Context-aware chat with full conversation history
- Real-time responses with typing indicators
- Quick action buttons for common questions
- Auto-expanding text input for longer messages

### 3. Smart Features
- Auto-scroll to latest messages
- Keyboard shortcuts (Enter to send, Shift+Enter for new line)
- Error handling with user-friendly messages
- Session persistence until browser closure

## 🎯 Key Features

### 🤖 Dual AI Personas
- **Hitesh Sir:** Programming, web development, career advice, tech trends
- **Piyush Sir:** Life guidance, personal growth, success strategies, wisdom

### 🎨 Modern UI/UX
- Glassmorphism design with backdrop blur effects
- Gradient themes matching each persona's expertise
- Floating particle animations for ambient atmosphere
- Responsive design across all device sizes

### 🔒 Security & Privacy
- User-provided API keys eliminate backend costs
- Session-only storage with automatic cleanup
- No data persistence on servers
- Transparent privacy practices

### ⚡ Performance Optimized
- Lazy loading of chat components
- Optimized animations with CSS transforms
- Efficient state management with React hooks
- Minimal bundle size with modern build tools

## 📬 Feedback
If you have any feedback, suggestions, or ideas to improve AI Persona Chat, please reach out to me at **your-email@domain.com**.

## 🎨 Color Palette

### Hitesh Sir (Tech Theme)
- **Primary Gradient:** `from-pink-500 to-purple-600`
- **Message Bubbles:** `from-pink-600 to-purple-600`
- **Accent Colors:** Purple variants for UI elements

### Piyush Sir (Wisdom Theme)
- **Primary Gradient:** `from-cyan-500 to-blue-600`
- **Message Bubbles:** `from-cyan-600 to-blue-600`
- **Accent Colors:** Blue variants for UI elements

### Global Theme
- **Background:** `from-slate-900 via-purple-900 to-slate-900`
- **Cards:** `slate-900/80` with `backdrop-blur-sm`
- **Borders:** `slate-700/50` with glassmorphism effects

## 📂 Project Structure

```
ai-persona-chat/
├── src/
│   ├── components/
│   │   ├── Home.jsx          # Landing page with persona cards
│   │   ├── MetorPersona.jsx  # Tech mentor chat interface
│   │   ├── ApiKeyModal.jsx   # API key input modal
│   │   └── Error.jsx         # Error handling component
│   ├── App.jsx               # Main app with routing
│   └── main.jsx              # React entry point
├── backend/
│   ├── server.js             # Express server with OpenAI integration
│   └── persona/               # API route handlers
```

## 🔮 Future Enhancements

- Additional personas for different expertise areas
- Voice chat integration with speech-to-text
- Chat export functionality for saving conversations
- Persona customization with user-defined personalities
- Multi-language support for global accessibility
- Advanced analytics for conversation insights
