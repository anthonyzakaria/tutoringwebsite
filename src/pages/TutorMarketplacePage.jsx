// pages/TutorMarketplacePage.jsx

import React, { useContext, useEffect, useState } from 'react';
import { TutorDataContext } from '../context/TutorDataContext.jsx';
import { useNavigate } from 'react-router-dom';

function TutorMarketplacePage() {
  const { selectedUniversity, selectedCourse } = useContext(TutorDataContext);
  const [tutorList, setTutorList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Construct the API URL with query parameters
    let baseUrl = 'https://j3cw863bsl.execute-api.us-east-1.amazonaws.com/dev/tutorfilterresource';
    let queryParams = new URLSearchParams();

    if (selectedUniversity) {
      queryParams.append("school_id", selectedUniversity);
    }
    if (selectedCourse) {
      queryParams.append("classes_available_to_teach", selectedCourse);
    }

    // Final URL with parameters
    let apiUrl = `${baseUrl}?${queryParams.toString()}`;
    console.log("[Fetch Tutors] calling:", apiUrl);

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then((res) => {
        console.log("[Fetch Tutors] status:", res.status);
        if (!res.ok) {
          throw new Error(`Failed to fetch tutors. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("[Fetch Tutors] data:", data);
        setTutorList(data);
      })
      .catch((err) => {
        console.error('[Fetch Tutors] error:', err);
      });
  }, [selectedUniversity, selectedCourse]); // Fetch tutors when filters change

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-bold text-brand-primary cursor-pointer"
          onClick={() => navigate('/')}
        >
          TutorMyCollege
        </div>
        <div className="space-x-4">
          <button className="text-gray-700 hover:text-brand-primary transition" onClick={() => navigate('/')}>
            Home
          </button>
          <button className="text-gray-700 hover:text-brand-primary transition" onClick={() => navigate('/student-dashboard')}>
            Student Dashboard
          </button>
        </div>
      </nav>

      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">Tutor Marketplace</h1>
        <p className="text-gray-600 mb-4">
          Selected University: <strong>{selectedUniversity || "None"}</strong><br/>
          Selected Course: <strong>{selectedCourse || "None"}</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorList.length === 0 ? (
            <p className="text-gray-500 col-span-full">
              No tutors found. (Or still loading...)
            </p>
          ) : tutorList.map((tutor) => (
            <div key={tutor.tutor_id} className="bg-white p-4 rounded shadow">
              <img 
                src={tutor.profile_picture || "default-profile.png"} 
                alt={tutor.name} 
                className="w-24 h-24 object-cover rounded-full mb-2"
              />
              <h2 className="text-xl font-semibold mb-1">{tutor.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                Year: {tutor.year_in_school} | Rate: ${tutor.rate_per_hour}/hr
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Average Rating: {tutor.average_rating || "N/A"}
              </p>
              <p className="text-sm text-gray-700 mb-2">
                {tutor.personal_bio || "No bio available"}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Classes: {tutor.classes_available_to_teach?.join(", ") || "None"}
              </p>
              <button 
                className="bg-brand-primary text-white px-3 py-1 rounded hover:bg-purple-600 transition"
                onClick={() => alert(`Scheduling with ${tutor.name} coming soon...`)}
              >
                Schedule
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white text-center py-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TutorMyCollege. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default TutorMarketplacePage;
