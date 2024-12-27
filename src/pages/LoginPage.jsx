// pages/LoginPage.jsx
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Mock user object
    const mockUser = {
      id: 1,
      name: 'John Doe',
      role,
      email
    }
    login(mockUser)

    if (role === 'tutor') {
      navigate('/register-tutor')
    } else {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-bold text-brand-primary cursor-pointer"
          onClick={() => navigate('/')}
        >
          TutorMarketplace
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-6 shadow-md rounded max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
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
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Role</label>
              <select 
                className="w-full border border-gray-300 rounded-md p-2"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-purple-600 transition w-full"
            >
              Login
            </button>
          </form>
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

export default LoginPage
