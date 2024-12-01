import React from 'react';
import ReusableCard from './Reusable/ReusableCard';

const CardSection = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 text-center">
            <h1 className="text-2xl font-bold mb-2 text-green-500 dark:text-white">M & Healthy</h1>
            <h2 className="text-3xl font-semibold mb-1 text-gray-700 dark:text-gray-300">Our Services</h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
                This is a small sentence providing additional context about the cards displayed below.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <ReusableCard
                    title="Engineering"
                    description="Structure
Mechanical
Electrical
Plumbing
Fire Protection"
                    link="#"
                    linkText="Learn More"
                    icon="/engin.png"
                />
                <ReusableCard
                    title="Architecture"
                    description="Master Planning
Urban Design
Infrastructure Planning
Architectural Design
Interior Design"
                    link="#"
                    linkText="Learn More"
                    icon="/arch.png"
                />
                <ReusableCard
                    title="Project Management"
                    description="Construction Administration
Project Management
Value Engineering
Quantity Estimation
Quality Control"
                    link="#"
                    linkText="Learn More"
                    icon="/project.png"
                />
                <ReusableCard
                    title="Sustainability"
                    description="Energy Simulations Energy Audits
Green Certification
Net Zero Designs
Innovative technologies"
                    link="#"
                    linkText="Learn More"
                    icon="/bar-summer-svgrepo-com.svg"
                />
            </div>
        </div>
    );
};

export default CardSection;
