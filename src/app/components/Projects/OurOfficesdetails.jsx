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
        const response = await axios.get(`http://udaan-digital-backend.vercel.app/api/project/${id}`);
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
      <h1 className="text-5xl font-bold bastia-font p-4">{project.name}</h1>
      <p className="text-gray-600 futura-font p-4">{project.description}</p>
      <p className="text-teal-500 font-medium futura-font p-4">{project.location}</p>
    </div>
  );
};

export default ProjectDetail;
