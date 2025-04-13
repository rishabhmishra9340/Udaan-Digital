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
        const response = await axios.get(`http://localhost:5000/api/project/${id}`);
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

      <img src={project.image} alt={project.name} className="mt-4 w-full h-96" />
      <img src={project.imageadd} alt={project.name} className="mt-4 w-full h-96" />
      <img src={project.imageadds} alt={project.name} className="mt-4 w-full h-96" />
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p className="mt-4 text-lg font-semibold">Location: {project.location}</p>
      <p className="mt-4">{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
