'use client';
import { useParams } from 'next/navigation'; // Correct import from 'next/navigation' in App Directory
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Access dynamic route parameters with `useParams`

  useEffect(() => {
    if (!id) return; // Wait until `id` is available

    const fetchProject = async () => {
      try {
        const response = await axios.get(`https://udaan-digital-backend-1.onrender.com/api/project/${id}`);
        if (response.data.success) {
          setProject(response.data.project);
        } else {
          setError('Project not found');
        }
      } catch (error) {
        setError('Error fetching project details');
        console.error(error);
      }
    };

    fetchProject();
  }, [id]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!project) return <div>Loading...</div>;

  return (
    <div className="p-6">

      <img src={project.image} alt={project.name} className="mt-4 w-full h-auto" />
      <img src={project.imageadd} alt={project.name} className="mt-4 w-full h-auto" />
      <img src={project.imageadds} alt={project.name} className="mt-4 w-full h-auto" />
      <h1 className="text-4xl font-bold bastia-font p-4 pt-10">{project.name}</h1>
      <p className="text-gray-600 text-2xl futura-font p-4">{project.description}</p>
      <p className="text-teal-500 font-medium text-2xl futura-font p-4">{project.location}</p>
    </div>
  );
};

export default ProjectDetail;
