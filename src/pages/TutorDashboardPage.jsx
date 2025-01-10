import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const TutorDashboardPage = () => {
  const { user, isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()
  const [upcomingSessions, setUpcomingSessions] = useState([])
  const [bio, setBio] = useState(user.bio || '')

  useEffect(() => {
    // If not logged in or role not 'tutor', redirect
    if (!isAuthenticated || user.role !== 'tutor') {
      navigate('/login')
      return
    }

    // Mock upcoming sessions
    setUpcomingSessions([
      { id: 1, studentName: 'Chris Walker', date: '2024-01-10', time: '5:00 PM' },
      { id: 2, studentName: 'Dana Hall', date: '2024-01-12', time: '11:00 AM' }
    ])
  }, [isAuthenticated, user, navigate])

  const handleUpdateBio = () => {
    // In real scenario, call API to update tutor's bio
    console.log('Updating bio to:', bio)
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
        <div className="space-x-4">
          <button 
            className="text-gray-700 hover:text-brand-primary transition"
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button 
            className="text-gray-700 hover:text-brand-primary transition"
            onClick={() => navigate('/logout')}
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Tutor Dashboard: {user.name}</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Upcoming Sessions</h2>
          {upcomingSessions.length === 0 ? (
            <p className="text-gray-600">No upcoming sessions scheduled.</p>
          ) : (
            <ul className="space-y-2">
              {upcomingSessions.map(session => (
                <li key={session.id} className="p-3 bg-white rounded shadow">
                  Session with <strong>{session.studentName}</strong> on {session.date} at {session.time}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Bio</h2>
          <textarea 
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            rows={5}
          />
          <button 
            onClick={handleUpdateBio}
            className="mt-2 bg-brand-primary text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Update Bio
          </button>
        </section>
      </main>

      <footer className="bg-white text-center py-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TutorMarketplace. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default TutorDashboardPage
