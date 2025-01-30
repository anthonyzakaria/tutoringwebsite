// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css' 
import { TutorDataProvider } from './context/TutorDataContext.jsx'
// Import Tailwind & custom styles

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <TutorDataProvider>
        <App />
      </TutorDataProvider>
    </BrowserRouter>
  // </React.StrictMode>
)

