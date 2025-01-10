// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import HowItWorksPage from './pages/HowItWorksPage'
import LoginPage from './pages/LoginPage'
import ContactUsPage from './pages/ContactUsPage'
import TutorMarketplacePage from './pages/TutorMarketplacePage'
import StudentDashboardPage from './pages/StudentDashboardPage'
import TutorDashboardPage from './pages/TutorDashboardPage'
// import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/marketplace" element={<TutorMarketplacePage />} />
      <Route path="/student-dashboard" element={<StudentDashboardPage />} />
      <Route path="/tutor-dashboard" element={<TutorDashboardPage />} />

      {/* Optional 404 if you want a fallback */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  )
}

export default App

