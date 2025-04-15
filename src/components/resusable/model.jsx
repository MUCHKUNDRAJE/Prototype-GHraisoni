// App.jsx

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import { Plane } from "@react-three/drei";

function Model() {
    const gltf = useGLTF("/model/game_boy_challenge/scene.gltf");
    const modelRef = useRef();
    // const planeRef = useRef();
    const scrollRef = useRef(0);
    const [scrollValue, setScrollValue] = useState(0);

    // Handle scroll updates
    useEffect(() => {
        const handleScroll = () => {
            scrollRef.current = window.scrollY;
            setScrollValue(scrollRef.current);
            console.log(scrollValue);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollValue]);

    useFrame(({ clock }) => {
        if (modelRef.current) {
            const time = clock.getElapsedTime();
            modelRef.current.position.y = -0.05 + Math.sin(time) * 0.02;

            if (scrollValue <= 360) {
                modelRef.current.rotation.y = scrollValue * 0.017; // adjust factor for sensitivity
                modelRef.current.position.x = -0.7 + scrollValue * 0.004; // move left based on scroll
            }
            else if (scrollValue >= 780){
                const adjust = scrollValue - 2200 
              modelRef.current.position.x = -0.7 - adjust * 0.001;
             
            }
        }

   
    });

    return (
        <>
        <primitive
            ref={modelRef}
            object={gltf.scene}
            position={[-0.700, -0.1, -0.23]}
            scale={1}
        />
    
        
        </>
    );
}

export default Model;
