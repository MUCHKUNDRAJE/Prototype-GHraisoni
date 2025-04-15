import React, { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

function CameraController() {
  const { camera } = useThree();
  const manualPosition = useRef(new Vector3(-0.6, 0.2, 1.7)); // Initial camera position
  const scrollPosition = useRef(0); // Store the scroll position
  const [scrollFactor, setScrollFactor] = useState(0); // To track scroll value for smooth movement

  // Function to manually set camera position
  const setCameraPosition = (scroll) => {
   let newX=0
    if(scroll <= 200)
    {
       newX = -0.6 + scroll * 0.01;

    }
   

    manualPosition.current.set(newX, 0.2, 1.7); // Keep Z fixed at 1.7 (can modify if needed)
  };

  // Scroll event handler
  const onScroll = () => {
    scrollPosition.current = window.scrollY; // Get scroll position
    setScrollFactor(scrollPosition.current); // Update state to trigger re-render
  };

  // Attach scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Update the camera position based on the scroll value
  useFrame(() => {
    // Update the camera position slowly with lerp for smooth movement
    setCameraPosition(scrollFactor);
    camera.position.lerp(manualPosition.current, 0.05); // Smooth transition
    camera.lookAt(0, 0, 0); // Keep the camera focused at the origin (0, 0, 0)
  });

  return null;
}

export default CameraController;
