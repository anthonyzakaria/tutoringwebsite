import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()
  const [schoolEmail, setSchoolEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log("Logging in with:", { schoolEmail, password })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER */}
      <header className="h-16 px-6 flex justify-between items-center border-b border-gray-200">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-purple-600 cursor-pointer" onClick={() => navigate('/')}>
          TutorMyCollege
        </div>

        {/* Right: Sign Up Button */}
        <button
          onClick={() => navigate('/signup')}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Sign Up
        </button>
      </header>

      {/* Centered Login Box */}
      <main className="flex justify-center items-center flex-grow">
        <div className="bg-white border border-gray-200 rounded-lg p-8 w-full max-w-sm shadow-lg">
          <h1 className="text-xl font-bold mb-6 text-center">Login</h1>

          {/* Google Sign-In Placeholder */}
          <button className="w-full border border-gray-300 p-2 flex items-center justify-center bg-gray-100 text-gray-700 mb-4">
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* School Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">School Email</label>
              <input
                type="email"
                placeholder="name@university.edu"
                className="w-full border border-gray-300 rounded px-3 py-2
                           bg-black text-white placeholder-gray-300
                           focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={schoolEmail}
                onChange={(e) => setSchoolEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded px-3 py-2
                           bg-black text-white placeholder-gray-300
                           focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded font-medium 
                         hover:bg-purple-700 transition-colors"
            >
              Login
            </button>
          </form>

          {/* "Don't have an account? Sign up" */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="bg-black text-white px-2 py-1 rounded text-sm ml-1
                           hover:bg-gray-800 transition"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage

