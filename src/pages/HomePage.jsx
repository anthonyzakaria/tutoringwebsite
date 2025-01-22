// src/pages/HomePage.jsx

import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TutorDataContext } from '../context/TutorDataContext.jsx'
import UniversitySelect from '../components/UniversitySelect'
import CourseSelect from '../components/CourseSelect'

function HomePage() {
  const navigate = useNavigate()
  const { selectedUniversity, setSelectedUniversity, selectedCourse, setSelectedCourse } = useContext(TutorDataContext)

  // This array is now filled by fetching from your API
  const [universities, setUniversities] = useState([])

  // Local mapping of courses for each known university name
  const coursesByUniversity = {
    'University A': ['Calculus 101', 'Physics 201', 'Chemistry 301'],
    'University B': ['History 101', 'Philosophy 201', 'Sociology 301'],
    'University C': ['Computer Science 101', 'Data Structures 201', 'AI 301'],
  }

  const [availableCourses, setAvailableCourses] = useState([])

  // 1. Fetch the list of universities from AWS
  useEffect(() => {
    fetch('https://mvokoi9esi.execute-api.us-east-1.amazonaws.com/dev/schoolselect')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch universities. Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        // data is presumably [ { school_id, name }, ... ]
        setUniversities(data)
      })
      .catch((err) => {
        console.error('Error fetching universities:', err)
      })
  }, [])

  // 2. Whenever a university is selected, pick the correct courses
  useEffect(() => {
    if (selectedUniversity && coursesByUniversity[selectedUniversity]) {
      setAvailableCourses(coursesByUniversity[selectedUniversity])
    } else {
      setAvailableCourses([])
    }
  }, [selectedUniversity])

  const handleFindTutors = () => {
    navigate('/marketplace')
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* NAVIGATION */}
      <nav className="flex items-center justify-between py-4 px-6 bg-white shadow">
        <div 
          className="text-2xl font-bold text-brand-primary cursor-pointer"
          onClick={() => navigate('/')}
        >
          TutorMyCollege
        </div>
        <div className="space-x-4">
          <button
            className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
            onClick={() => navigate('/about')}
          >
            About
          </button>
          <button
            className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
            onClick={() => navigate('/how-it-works')}
          >
            How It Works
          </button>
          <button
            className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
            onClick={() => navigate('/student-dashboard')}
          >
            Student Dashboard
          </button>
          <button
            className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
            onClick={() => navigate('/tutor-dashboard')}
          >
            Tutor Dashboard
          </button>
          <button
            className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
            onClick={() => navigate('/contact-us')}
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header
        className="relative flex-grow bg-gradient-to-r from-brand-primary to-purple-700
                   text-white flex flex-col items-center justify-center"
        style={{ minHeight: 'calc(100vh - 72px)' }}
      >
        <div className="max-w-screen-xl w-full px-4">
          <h1 className="text-5xl font-extrabold mb-4 text-center">
            Find the Perfect Tutor
          </h1>
          <p className="text-lg max-w-2xl text-center mb-8 mx-auto opacity-90">
            Ace your courses with help from expert tutors at your university.
          </p>

          {/* SEARCH BOX */}
          <div className="bg-white text-gray-800 w-full max-w-md mx-auto p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Search Tutors</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                University
              </label>
              <UniversitySelect
                universities={universities}           // array of { school_id, name }
                selectedUniversity={selectedUniversity}
                onSelect={setSelectedUniversity}
              />
            </div>

            {selectedUniversity && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Course
                </label>
                <CourseSelect
                  courses={availableCourses}
                  selectedCourse={selectedCourse}
                  onSelect={setSelectedCourse}
                />
              </div>
            )}

            <button
              disabled={!selectedUniversity}
              onClick={handleFindTutors}
              className={`w-full py-2 rounded-md mt-2 font-medium transition-colors
                ${
                  selectedUniversity
                    ? 'bg-brand-primary text-white hover:bg-purple-600'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }
              `}
            >
              Find Tutors
            </button>
          </div>
        </div>
      </header>

      {/* FOOTER */}
      <footer className="bg-white text-center py-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TutorMyCollege. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default HomePage

