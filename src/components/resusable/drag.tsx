import React from 'react';

function Drag({ onAddClick }) {
  return (
    <div 
      onClick={onAddClick}
      className='absolute top-[150px] right-2 h-10 w-56 rounded-xl border-2 border-dashed bg-white flex items-center justify-center cursor-pointer'
    >
      <h1>Add UHI</h1>
    </div>
  );
}

export default Drag;
