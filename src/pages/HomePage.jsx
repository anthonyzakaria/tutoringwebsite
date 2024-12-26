import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TutorDataContext } from '../context/TutorDataContext'
import UniversitySelect from '../components/UniversitySelect'
import CourseSelect from '../components/CourseSelect'

const universities = ['University A', 'University B', 'University C']

const HomePage = () => {
  const { selectedUniversity, setSelectedUniversity, selectedCourse, setSelectedCourse } = useContext(TutorDataContext)
  const navigate = useNavigate()

  const coursesByUniversity = {
    'University A': ['Calculus 101', 'Physics 201', 'Chemistry 301'],
    'University B': ['History 101', 'Philosophy 201', 'Sociology 301'],
    'University C': ['Computer Science 101', 'Data Structures 201', 'AI 301'],
  }

  const [availableCourses, setAvailableCourses] = useState([])

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
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Tutor Marketplace</h1>
      <div style={{ marginBottom: '10px' }}>
        <a href="/how-it-works">How It Works</a> | <a href="/about">About Us</a>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigate('/login')}>Log in as Student</button>{' '}
        <button onClick={() => navigate('/login-tutor')}>Log in as Tutor</button>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <h2>Find Tutors</h2>
        <UniversitySelect
          universities={universities}
          selectedUniversity={selectedUniversity}
          onSelect={setSelectedUniversity}
        />

        {selectedUniversity && (
          <CourseSelect
            courses={availableCourses}
            selectedCourse={selectedCourse}
            onSelect={setSelectedCourse}
          />
        )}
      </div>

      <button disabled={!selectedUniversity} onClick={handleFindTutors}>
        Find Tutors
      </button>
    </div>
  )
}

export default HomePage
