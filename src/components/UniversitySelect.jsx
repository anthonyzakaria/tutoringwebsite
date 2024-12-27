// components/UniversitySelect.jsx
import React from 'react'

const UniversitySelect = ({ universities, selectedUniversity, onSelect }) => {
  return (
    <select
      className="w-full border border-gray-300 rounded-md p-2"
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
  )
}

export default UniversitySelect
