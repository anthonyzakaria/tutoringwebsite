import React, { useState } from 'react'

// A simple star-rating component for demonstration:
function StarRating({ rating, onRate }) {
  // We'll allow a rating from 1..5
  // rating is the current rating, onRate is a function to update
  const [hoveredStar, setHoveredStar] = useState(null)

  const handleMouseEnter = (starValue) => setHoveredStar(starValue)
  const handleMouseLeave = () => setHoveredStar(null)
  const handleClick = (starValue) => {
    onRate(starValue)
  }

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((starValue) => {
        const isFilled = starValue <= (hoveredStar || rating)
        return (
          <svg
            key={starValue}
            className={`w-6 h-6 cursor-pointer transition-colors ${
              isFilled ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 
            00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 
            2.46a1 1 0 00-.363 1.118l1.286 3.97c.3.921-.755 
            1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 
            0l-3.388 2.46c-.784.57-1.84-.197-1.54-1.118l1.286-
            3.97a1 1 0 00-.363-1.118l-3.388-2.46c-.783-.57-
            .38-1.81.588-1.81h4.18a1 1 0 
            00.95-.69l1.286-3.97z" />
          </svg>
        )
      })}
    </div>
  )
}

// A reusable list item for a past session, including star rating
function PastSessionItem({ session, onRatingChange }) {
  const handleRate = (value) => {
    onRatingChange(session.id, value)
  }

  return (
    <li className="p-4 bg-white rounded shadow flex flex-col md:flex-row items-start md:items-center justify-between">
      <div className="mb-2 md:mb-0">
        Session with <strong>{session.tutorName}</strong> on {session.date} at {session.time}
      </div>
      <div className="flex items-center space-x-2">
        {/* If there's already a rating, show it. Otherwise, let them set it. */}
        {session.rating > 0 ? (
          <span className="text-sm text-gray-700">
            Your rating:
            <span className="ml-1 font-bold text-yellow-500">{session.rating} / 5</span>
          </span>
        ) : (
          <StarRating rating={0} onRate={handleRate} />
        )}
      </div>
    </li>
  )
}

// Main Student Dashboard Page
function StudentDashboardPage() {
  // Example mock data
  const [upcomingSessions] = useState([
    { id: 1, tutorName: 'Alice Chang', date: '2024-01-12', time: '10:00 AM' },
    { id: 2, tutorName: 'Bob Martin', date: '2024-01-15', time: '2:00 PM' }
  ])

  // Each item can hold a `rating`. 0 means not yet rated.
  const [pastSessions, setPastSessions] = useState([
    { id: 3, tutorName: 'Dan Wu', date: '2023-12-10', time: '3:00 PM', rating: 0 },
    { id: 4, tutorName: 'Eve James', date: '2023-11-22', time: '1:00 PM', rating: 4 } // example rated
  ])

  // Handler to update rating in pastSessions
  const handleRatingChange = (sessionId, ratingValue) => {
    setPastSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId ? { ...session, rating: ratingValue } : session
      )
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-primary">TutorMyCollege</div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow md:max-w-4xl mx-auto w-full px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">
          Welcome, <span className="text-gray-700">(Student Name)</span>!
        </h1>

        {/* Upcoming Sessions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
          {upcomingSessions.length === 0 ? (
            <p className="text-gray-600">No upcoming sessions scheduled.</p>
          ) : (
            <ul className="space-y-4">
              {upcomingSessions.map((session) => (
                <li key={session.id} className="p-4 bg-white rounded shadow">
                  Session with <strong>{session.tutorName}</strong> on {session.date} at {session.time}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Past Sessions with Ratings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Past Sessions</h2>
          {pastSessions.length === 0 ? (
            <p className="text-gray-600">No past sessions found.</p>
          ) : (
            <ul className="space-y-4">
              {pastSessions.map((session) => (
                <PastSessionItem 
                  key={session.id}
                  session={session}
                  onRatingChange={handleRatingChange}
                />
              ))}
            </ul>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TutorMyCollege. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default StudentDashboardPage
