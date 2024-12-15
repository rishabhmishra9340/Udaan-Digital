import React from 'react';
import ReusableCard from './Reusable/ReusableCard';

const CardSection = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 text-center">
            <h1 className="text-2xl font-bold mb-2 text-green-500 dark:text-white">Fields</h1>
            <h2 className="text-3xl font-semibold mb-1 text-gray-700 dark:text-gray-300">Our Expertise</h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
                This is a small sentence providing additional context about the cards displayed below.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <ReusableCard
                    title="Engineering"
                    description={`Structure\nMechanical\nElectrical\nPlumbing\nFire Protection`}
                    link="#"
                    icon="/engin.png"
                />
                <ReusableCard
                    title="Architecture"
                    description={`Master Planning\nUrban Design\nInfrastructure Planning\nArchitectural Design\nInterior Design`}
                    link="#"
                    icon="/arch.png"
                />
                <ReusableCard
                    title="Project Management"
                    description={`Construction Administration\nProject Management\nValue Engineering\nQuantity Estimation\nQuality Control`}
                    link="#"
                    icon="/project.png"
                />
                <ReusableCard
                    title="Sustainability"
                    description={`Energy Simulations\nEnergy Audits\nGreen Certification\nNet Zero Designs\nInnovative technologies`}
                    link="#"
                    icon="/bar-summer-svgrepo-com.svg"
                />
            </div>
        </div>
    );
};

export default CardSection;
