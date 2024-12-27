// pages/TutorMarketplacePage.jsx
import React, { useContext, useEffect } from 'react'
import { TutorDataContext } from '../context/TutorDataContext'
import { useNavigate } from 'react-router-dom'

const TutorMarketplacePage = () => {
  const { selectedUniversity, selectedCourse, tutorList, setTutorList } = useContext(TutorDataContext)
  const navigate = useNavigate()

  useEffect(() => {
    // Mock fetch tutors based on selectedUniversity and selectedCourse
    const mockTutors = [
      { id: 1, name: 'John Doe', bio: 'Experienced Math Tutor', rating: 4.5 },
      { id: 2, name: 'Jane Smith', bio: 'Physics PhD candidate', rating: 4.8 }
    ]
    setTutorList(mockTutors)
  }, [selectedUniversity, selectedCourse, setTutorList])

  return (
    <div className="min-h-screen flex flex-col">
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
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </nav>

      <main className="flex-grow px-6 py-10 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tutor Marketplace</h1>
        <p className="text-gray-600 mb-6">
          Showing tutors for: <strong>{selectedUniversity}</strong> - {selectedCourse || 'All Courses'}
        </p>
        <ul className="space-y-4">
          {tutorList.map(tutor => (
            <li key={tutor.id} className="p-4 bg-white rounded shadow-md">
              <h3 className="text-lg font-semibold">{tutor.name}</h3>
              <p className="text-sm text-gray-600">{tutor.bio}</p>
              <p className="text-sm mt-1">Rating: <strong>{tutor.rating}</strong></p>
              {/* Add scheduling or rating submission here */}
            </li>
          ))}
        </ul>
      </main>

      <footer className="bg-white text-center py-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TutorMarketplace. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default TutorMarketplacePage
