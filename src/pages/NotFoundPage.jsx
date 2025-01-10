import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-6xl font-bold text-brand-primary mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! The page you requested was not found.</p>
        <button
          className="bg-brand-primary text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          onClick={() => navigate('/')}
        >
          Return to Home
        </button>
      </main>
    </div>
  )
}

export default NotFoundPage
