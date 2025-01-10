import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const StudentDashboardPage = () => {
  const { user, isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()
  const [upcomingSessions, setUpcomingSessions] = useState([])
  const [pastSessions, setPastSessions] = useState([])

  useEffect(() => {
    // If not logged in or role not 'student', redirect
    if (!isAuthenticated || user.role !== 'student') {
      navigate('/login')
      return
    }

    // Mock fetch from backend
    const mockUpcoming = [
      { id: 1, tutorName: 'Alice Chang', date: '2024-01-12', time: '10:00 AM' },
      { id: 2, tutorName: 'Bob Martin', date: '2024-01-15', time: '2:00 PM' }
    ]
    const mockPast = [
      { id: 3, tutorName: 'Dan Wu', date: '2023-12-10', time: '3:00 PM' }
    ]

    setUpcomingSessions(mockUpcoming)
    setPastSessions(mockPast)
  }, [isAuthenticated, user, navigate])

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
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Upcoming Sessions</h2>
          {upcomingSessions.length === 0 ? (
            <p className="text-gray-600">No upcoming sessions scheduled.</p>
          ) : (
            <ul className="space-y-2">
              {upcomingSessions.map(session => (
                <li key={session.id} className="p-3 bg-white rounded shadow">
                  Session with <strong>{session.tutorName}</strong> on {session.date} at {session.time}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Past Sessions</h2>
          {pastSessions.length === 0 ? (
            <p className="text-gray-600">No past sessions found.</p>
          ) : (
            <ul className="space-y-2">
              {pastSessions.map(session => (
                <li key={session.id} className="p-3 bg-white rounded shadow">
                  Session with <strong>{session.tutorName}</strong> on {session.date} at {session.time}
                </li>
              ))}
            </ul>
          )}
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

export default StudentDashboardPage
