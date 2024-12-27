// src/components/UniversitySelect.jsx
import React from 'react'

const UniversitySelect = ({ universities, selectedUniversity, onSelect }) => {
  return (
    <select
      className="w-full bg-brand-primary text-white border border-brand-primary 
                 rounded-md p-2 focus:outline-none 
                 focus:ring-2 focus:ring-purple-500 transition-colors"
      value={selectedUniversity || ''}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="" className="bg-white text-gray-700">
        -- Select a University --
      </option>
      {universities.map((uni) => (
        <option key={uni} value={uni} className="bg-brand-primary text-white">
          {uni}
        </option>
      ))}
    </select>
  )
}

export default UniversitySelect
