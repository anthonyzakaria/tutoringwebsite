import React from 'react'

const CourseSelect = ({ courses, selectedCourse, onSelect }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <label htmlFor="course-select">Select Course: </label>
      <select
        id="course-select"
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
    </div>
  )
}

export default CourseSelect
