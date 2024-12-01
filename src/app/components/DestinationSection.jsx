import React from 'react';
import DestinationCard from '@/app/components/Reusable/DestinationCard'

const DestinationSection = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <DestinationCard
        image="/pexels-aarti-vijay-1207504-2745534.jpg"
        title="15 Days Tour"
        rating="5.0"
        description="Wooden House, Florida"
        buttonText="Reserve"
      />
      <DestinationCard
        image="/pexels-ashishman-kar-362532-979664.jpg"
        title="15 Days Tour"
        rating="4.8"
        description="Beachfront Villa, California"
        buttonText="Book Now"
      />
      <DestinationCard
        image="/pexels-bhawanirajkclicks-9261715.jpg"
        title="15 Days Tour"
        rating="4.5"
        description="Mountain Retreat, Colorado"
        buttonText="Inquire"
      />
      <DestinationCard
        image="/pexels-victor-lavaud-302543-3361480.jpg"
        title="15 Days Tour"
        rating="4.7"
        description='Taj Mahal India'
        buttonText="Explore"
      />
         <DestinationCard
        image="/pexels-victor-lavaud-302543-3361480.jpg"
        title="15 Days Tour"
        rating="4.7"
        description='Modern Apartment, New York'
        buttonText="Explore"
      />
         <DestinationCard
        image="/pexels-victor-lavaud-302543-3361480.jpg"
        title="15 Days Tour"
        rating="4.7"
        description='Modern Apartment, New York'
        buttonText="Explore"
      />
    </div>
  );
};

export default DestinationSection;
