import React from 'react'

const UniversitySelect = ({ universities, selectedUniversity, onSelect }) => {
  return (
    <select
      className="w-full border border-gray-300 rounded-md p-2 
                 focus:outline-none focus:ring-2 focus:ring-purple-500 
                 transition-colors bg-white text-gray-700"
      // We assume selectedUniversity is set to a string or number in the context
      value={selectedUniversity || ''}
      onChange={(e) => {
        console.log("[UniversitySelect] user picked (ID):", e.target.value)
        onSelect(e.target.value)  // sets context to the numeric ID (as a string)
      }}
    >
      <option value="">-- Select a University --</option>
      {universities.map((uniObj) => (
        <option key={uniObj.school_id} value={uniObj.school_id}>
          {uniObj.name}
        </option>
      ))}
    </select>
  )
}

export default UniversitySelect






