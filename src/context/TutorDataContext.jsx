// context/TutorDataContext.js
import { createContext, useState } from 'react'

export const TutorDataContext = createContext({
  selectedUniversity: '',
  setSelectedUniversity: () => {},
  selectedCourse: '',
  setSelectedCourse: () => {},
  tutorList: [],
  setTutorList: () => {}
})

export const TutorDataProvider = ({ children }) => {
  const [selectedUniversity, setSelectedUniversity] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [tutorList, setTutorList] = useState([])

  return (
    <TutorDataContext.Provider value={{
      selectedUniversity,
      setSelectedUniversity,
      selectedCourse,
      setSelectedCourse,
      tutorList,
      setTutorList
    }}>
      {children}
    </TutorDataContext.Provider>
  )
}
