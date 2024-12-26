import React, { useContext, useEffect } from 'react'
import { TutorDataContext } from '../context/TutorDataContext'

const TutorMarketplacePage = () => {
  const { selectedUniversity, selectedCourse, tutorList, setTutorList } = useContext(TutorDataContext)

  useEffect(() => {
    // Mock fetch tutors based on selectedUniversity and selectedCourse
    const mockTutors = [
      { id: 1, name: 'John Doe', bio: 'Experienced tutor in Math', rating: 4.5 },
      { id: 2, name: 'Jane Smith', bio: 'Physics PhD candidate', rating: 4.8 }
    ]
    setTutorList(mockTutors)
  }, [selectedUniversity, selectedCourse, setTutorList])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tutor Marketplace</h1>
      <p>Showing tutors for: {selectedUniversity} - {selectedCourse || 'All Courses'}</p>
      <ul>
        {tutorList.map(tutor => (
          <li key={tutor.id}>
            <h3>{tutor.name}</h3>
            <p>{tutor.bio}</p>
            <p>Rating: {tutor.rating}</p>
            {/* Scheduling and booking buttons go here */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TutorMarketplacePage
