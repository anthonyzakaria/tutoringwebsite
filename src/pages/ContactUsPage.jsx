import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ContactUsPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with actual backend call or email service
    console.log('Contact form submitted:', { name, email, message })
    setSuccess(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* NAV */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-bold text-brand-primary cursor-pointer"
          onClick={() => navigate('/')}
        >
          TutorMarketplace
        </div>
        <div className="space-x-4">
          <button 
            className="text-gray-700 hover:text-brand-primary transition"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white p-6 shadow-md rounded w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          {!success ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <button 
                type="submit"
                className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-purple-600 transition w-full"
              >
                Send
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2">Thank you!</h2>
              <p>Your message has been sent. We will get back to you soon.</p>
              <button 
                className="mt-4 text-brand-primary underline"
                onClick={() => navigate('/')}
              >
                Return to Home
              </button>
            </div>
          )}
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

export default ContactUsPage
