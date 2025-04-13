'use client'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/project/${id}`);
        setProject(response.data.project);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md space-y-4">
      <img src={project.image} alt={project.name} className="w-60 h-56 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p className="text-gray-600">{project.description}</p>
      <p className="text-teal-500 font-medium">{project.location}</p>
    </div>
  );
};

export default ProjectDetail;
