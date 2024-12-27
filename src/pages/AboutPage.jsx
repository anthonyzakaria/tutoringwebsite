// pages/AboutPage.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple navbar */}
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
            onClick={() => navigate('/how-it-works')}
          >
            How It Works
          </button>
        </div>
      </nav>

      <main className="flex-grow px-6 py-10 bg-gray-50 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="max-w-2xl text-center text-gray-700 text-lg">
          We believe every student should have easy access to high-quality, 
          personalized tutoring. Our mission is to connect learners with the 
          best tutors in their university community, simplifying the process 
          of finding the right help at the right time. Whether you need 
          comprehensive exam prep or a quick homework review, we’re here 
          to help you succeed.
        </p>
      </main>

      <footer className="bg-white text-center py-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TutorMarketplace. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default AboutPage
