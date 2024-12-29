'use client'
import React, { useState } from 'react';

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const jobs = [
    { id: 1, title: 'Frontend Developer', location: 'Remote', description: 'Build amazing UIs using React.js' },
    { id: 2, title: 'Backend Developer', location: 'New York, USA', description: 'Work with Node.js and Express' },
    { id: 3, title: 'Full Stack Developer', location: 'San Francisco, USA', description: 'Handle both frontend and backend development' },
    { id: 4, title: 'UI/UX Designer', location: 'Remote', description: 'Design user-friendly interfaces and experiences' },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Career Opportunities</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-500">{job.location}</p>
            <p className="text-gray-700 mt-2">{job.description}</p>
            <button
              onClick={toggleModal}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Apply for Job</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  required
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-6 py-2 mr-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
