// pages/HowItWorksPage.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HowItWorksPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-primary cursor-pointer" onClick={() => navigate('/')}>
          TutorMarketplace
        </div>
        <div className="space-x-4">
          <button 
            className="text-gray-700 hover:text-brand-primary transition"
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button 
            className="text-gray-700 hover:text-brand-primary transition"
            onClick={() => navigate('/about')}
          >
            About
          </button>
        </div>
      </nav>

      <main className="flex-grow px-6 py-10 bg-gray-50 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">How It Works</h1>
        <div className="max-w-2xl space-y-6 text-gray-700">
          <p><strong>1.</strong> Select your university and course.</p>
          <p><strong>2.</strong> Browse through available tutors who specialize in that area.</p>
          <p><strong>3.</strong> Review each tutor’s profile, rating, and availability.</p>
          <p><strong>4.</strong> Schedule a session and get the help you need!</p>
        </div>
      </main>

      <footer className="bg-white text-center py-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TutorMarketplace. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default HowItWorksPage
