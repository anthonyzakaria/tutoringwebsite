// src/pages/HomePage.jsx

import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TutorDataContext } from '../context/TutorDataContext.jsx'
import UniversitySelect from '../components/UniversitySelect'
import CourseSelect from '../components/CourseSelect'

function HomePage() {
  const navigate = useNavigate()
  const {
    selectedUniversity,
    setSelectedUniversity,
    selectedCourse,
    setSelectedCourse
  } = useContext(TutorDataContext)

  const [universities, setUniversities] = useState([])
  const [allCourses, setAllCourses] = useState([]) // We'll store all courses here

  //
  // A) Fetch Universities once on mount
  //
  useEffect(() => {
    const urlUni = 'https://mvokoi9esi.execute-api.us-east-1.amazonaws.com/dev/schoolselect'
    console.log("[Fetch Universities] calling:", urlUni)

    fetch(urlUni)
      .then((res) => {
        console.log("[Fetch Universities] status:", res.status)
        if (!res.ok) {
          throw new Error(`Failed to fetch universities. Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        console.log("[Fetch Universities] data:", data)
        setUniversities(data) // e.g. [ { school_id, name } ]
      })
      .catch((err) => {
        console.error('[Fetch Universities] error:', err)
      })
  }, [])

  //
  // B) Fetch All Courses on mount (no filtering)
  //
  useEffect(() => {
    const urlCourses = 'https://bfoctt4eva.execute-api.us-east-1.amazonaws.com/dev/courseSelector'
    console.log("[Fetch All Courses] calling:", urlCourses)

    fetch(urlCourses)
      .then((res) => {
        console.log("[Fetch All Courses] status:", res.status)
        if (!res.ok) {
          throw new Error(`Failed to fetch courses. Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        console.log("[Fetch All Courses] data:", data)
        setAllCourses(data) // e.g. an array of { course_id, course_name, ... }
      })
      .catch((err) => {
        console.error('[Fetch All Courses] error:', err)
      })
  }, [])

  const handleFindTutors = () => {
    console.log("[Find Tutors] selectedUniversity:", selectedUniversity, "selectedCourse:", selectedCourse)
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
          {/* Additional Navbar Buttons */}
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

            {/* University Select */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">University</label>
              <UniversitySelect
                universities={universities}
                selectedUniversity={selectedUniversity}
                onSelect={setSelectedUniversity}
              />
            </div>

            {/* Course Select (Now just all courses) */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Course</label>
              {allCourses.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No courses loaded yet...
                </p>
              ) : (
                <CourseSelect
                  courses={allCourses}
                  selectedCourse={selectedCourse}
                  onSelect={setSelectedCourse}
                />
              )}
            </div>

            <button
              disabled={!selectedUniversity}
              onClick={handleFindTutors}
              className={`w-full py-2 rounded-md mt-2 font-medium transition-colors
                ${
                  selectedUniversity
                    ? 'bg-brand-primary text-white hover:bg-purple-600'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
            >
              Find Tutors
            </button>
          </div>
        </div>
      </header>

      <footer className="bg-white text-center py-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TutorMyCollege. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default HomePage


