import React from 'react'

const UniversitySelect = ({ universities, selectedUniversity, onSelect }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <label htmlFor="university-select">Select University: </label>
      <select
        id="university-select"
        value={selectedUniversity || ''}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">-- Select a University --</option>
        {universities.map((uni) => (
          <option key={uni} value={uni}>
            {uni}
          </option>
        ))}
      </select>
    </div>
  )
}

export default UniversitySelect
