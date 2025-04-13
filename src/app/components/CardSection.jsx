import React from 'react';
import ReusableCard from './Reusable/ReusableCard';

const CardSection = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 text-center">
            <h2 className="text-3xl font-semibold mb-1 text-gray-700 dark:text-gray-300">Our Expertise</h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
                "Expertly designing spaces that blend innovation, functionality, and sustainability."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <ReusableCard
                    title="Architectural Design"
                    description={`"Designing innovative and functional spaces that balance aesthetics and practicality."`}
                    link="#"
                    icon="/engin.png"
                />
                <ReusableCard
                    title="Master Planning"
                    description={`"Creating comprehensive and sustainable plans for future-ready urban and rural developments."`}
                    link="#"
                    icon="/arch.png"
                />
                <ReusableCard
                    title="Interior Design"
                    description={`"Crafting interiors that combine elegance, comfort, and functionality to enhance daily living."`}
                    link="#"
                    icon="/project.png"
                />
                <ReusableCard
                    title="Urban & Infrastructure Planning"
                    description={`"Developing efficient and sustainable infrastructure to support growing urban environments."`}
                    link="#"
                    icon="/bar-summer-svgrepo-com.svg"
                />
                <ReusableCard
                    title="Building Information Modeling (BIM)"
                    description={`"Utilizing advanced digital tools for precise design, construction, and project management."`}
                    link="#"
                    icon="/bar-summer-svgrepo-com.svg"
                />
            </div>
        </div>
    );
};

export default CardSection;
