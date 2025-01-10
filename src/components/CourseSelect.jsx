// src/components/CourseSelect.jsx
import React from 'react'

const CourseSelect = ({ courses, selectedCourse, onSelect }) => {
  return (
    <select
      className="w-full border border-gray-300 
                 rounded-md p-2 focus:outline-none 
                 focus:ring-2 focus:ring-purple-500 transition-colors
                 bg-white text-gray-700"
      value={selectedCourse || ''}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">
        -- Select a Course --
      </option>
      {courses.map((course) => (
        <option key={course} value={course}>
          {course}
        </option>
      ))}
    </select>
  )
}

export default CourseSelect

