// components/CourseSelect.jsx
import React, { useEffect, useState } from 'react'

const CourseSelect = ({ selectedUniversity, selectedCourse, onSelect }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (selectedUniversity) {
      fetch(`http://localhost:5000/courses?university_id=${selectedUniversity}`)
        .then(response => response.json())
        .then(data => setCourses(data))
        .catch(error => console.error('Error fetching courses:', error));
    } else {
      setCourses([]);
    }
  }, [selectedUniversity]);

  return (
    <select
      className="w-full border border-gray-300 rounded-md p-2"
      value={selectedCourse || ''}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">-- Select a Course --</option>
      {courses.map((course) => (
        <option key={course.id} value={course.id}>
          {course.name}
        </option>
      ))}
    </select>
  )
}

export default CourseSelect
