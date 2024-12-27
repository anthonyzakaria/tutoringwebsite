// components/CourseSelect.jsx
import React from 'react'

const CourseSelect = ({ courses, selectedCourse, onSelect }) => {
  return (
    <select
      className="w-full border border-gray-300 rounded-md p-2"
      value={selectedCourse || ''}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">-- Select a Course --</option>
      {courses.map((course) => (
        <option key={course} value={course}>
          {course}
        </option>
      ))}
    </select>
  )
}

export default CourseSelect
