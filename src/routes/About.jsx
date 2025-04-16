import React, { useState } from 'react';
import Nav from '../components/resusable/nav';
import Panel from '../components/resusable/controlpanel';
import NagpurHeatmap from '../components/resusable/heatmap';
import Drag from '../components/resusable/drag';

function About() {
  const [selectedCity, setSelectedCity] = useState('');
  const [showAddPopup, setShowAddPopup] = useState(false);

  const handleAddClick = () => {
    setShowAddPopup(!true);
  };

  return (
    <div className='h-screen w-full bg-[#F1EEEE]'>
      <Nav />
      <Panel selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <NagpurHeatmap selectedCity={selectedCity} showAddPopup={showAddPopup} />
      <Drag onAddClick={handleAddClick} />
    </div>
  );
}

export default About;
