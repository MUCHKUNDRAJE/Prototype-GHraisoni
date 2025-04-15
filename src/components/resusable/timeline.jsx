import React from 'react';

const GameBoyTimeline = () => {
  // Data for the evolution of the Game Boy series
  const gameBoyModels = [
    {
      year: 1989,
      name: "Game Boy",
      description: "The original Game Boy, released in 1989, introduced handheld gaming to the world.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Game_Boy_Console.jpg",
    },
    {
      year: 1998,
      name: "Game Boy Color",
      description: "The Game Boy Color, released in 1998, added color graphics and enhanced performance.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Game_Boy_Color.jpg",
    },
    {
      year: 2001,
      name: "Game Boy Advance",
      description: "The Game Boy Advance, released in 2001, offered 32-bit graphics and improved performance over its predecessors.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Game_Boy_Advance_Logo.png",
    },
    {
      year: 2003,
      name: "Game Boy Advance SP",
      description: "The Game Boy Advance SP, released in 2003, featured a clamshell design and a built-in light.",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_Boy_Advance_SP.png",
    },
    {
      year: 2005,
      name: "Game Boy Micro",
      description: "The Game Boy Micro, released in 2005, was a smaller version of the Game Boy Advance, with a high-resolution screen.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/GameBoyMicroConsole.jpg",
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Evolution of Game Boy</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {gameBoyModels.map((model, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: '0px 0',
              width: '80%',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '-3.5px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#000',
              }}
            ></div>
            <div style={{ borderLeft: '3px solid #000', paddingLeft: '20px', paddingTop: "20px" }}>
              <h3>{model.name} ({model.year})</h3>
              <p className='text-xs'>{model.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoyTimeline;
