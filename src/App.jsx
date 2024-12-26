import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import TutorMarketplacePage from './pages/TutorMarketplacePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HowItWorksPage from './pages/HowItWorksPage.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/marketplace" element={<TutorMarketplacePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
    </Routes>
  )
}

export default App

