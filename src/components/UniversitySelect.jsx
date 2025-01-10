// src/components/UniversitySelect.jsx
import React from 'react'

const UniversitySelect = ({ universities, selectedUniversity, onSelect }) => {
  return (
    <select
      className="w-full border border-gray-300 
                 rounded-md p-2 focus:outline-none 
                 focus:ring-2 focus:ring-purple-500 transition-colors
                 bg-white text-gray-700"
      value={selectedUniversity || ''}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">
        -- Select a University --
      </option>
      {universities.map((uni) => (
        <option key={uni} value={uni}>
          {uni}
        </option>
      ))}
    </select>
  )
}

export default UniversitySelect

