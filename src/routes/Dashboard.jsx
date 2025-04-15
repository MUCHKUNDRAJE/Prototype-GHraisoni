import React from 'react'
import Nav from '../components/resusable/nav'
import Model from "../components/resusable/model"
import CameraController from '../utils/CameraController'
import { OrbitControls} from "@react-three/drei"
import { Canvas} from "@react-three/fiber"
import { EffectComposer, Bloom,DepthOfField } from "@react-three/postprocessing";  // Import multiple effects
import SmoothScroll from '../utils/SmoothScroll'
import GameBoyTimeline from '../components/resusable/timeline'
import Card from '../components/resusable/card'
import { BlendFunction } from "postprocessing";
import { ChromaticAberration } from '@react-three/postprocessing';




import { Plane } from "@react-three/drei";
import { GetApiCall, PostApiCall } from '../utils/Interceptor'
import GetIdUser from '../utils/idtracker'
import Loader from '../components/resusable/transition-loader'

function Square() {
    return (
        <Plane args={[1, 1]} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="orange" />
        </Plane>
    );
}


function Dashboard() { 
    
   const id  = GetIdUser();
   
   const api = PostApiCall("http://localhost:8080/go",{id});
   console.log(api)
 


  return (
    <>
      <SmoothScroll/>
      <Loader/>
    <div className='h-screen  text-[#191919] w-full relative '>
         <Nav/>
         
 <div className='z-70 h-screen w-full fixed top-0'>
    <Canvas   camera={{ position: [0, 10, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Model />
    
      <CameraController />
      {/* Optional Controls */}
      {/* <OrbitControls /> */}
      <EffectComposer>
  {/* Bloom effect */}
  <Bloom
    intensity={1.5}
    width={300}
    height={300}
    kernelSize={3}
    luminanceThreshold={0.1}
    luminanceSmoothing={0.9}
  />

  {/* RGB Shift / Chromatic Aberration
  <ChromaticAberration
    blendFunction={BlendFunction.NORMAL} // blend mode
    offset={[0.0001, 0.001]} // slight RGB shift
  /> */}
</EffectComposer>
    </Canvas>
 </div>

      <div className='  min-h-[310vh] w-full bg-[#f1eeee]  '>
            <div className=' absolute right-40 top-60 flex flex-col gap-3 '>
            <h1 id='game-tag' className='text-3xl'>Game Boy <span id='game-tag' className='text-red-600'>C</span><span id='game-tag' className='text-purple-600'>O</span><span id='game-tag' className='text-green-600'>L</span><span id='game-tag'  className='text-yellow-600'>O</span><span id='game-tag'  className='text-blue-400'>R</span>               
               </h1>
            <p className='w-[35rem]'>
            This 3D model is a digital recreation of the iconic Nintendo Game Boy, a handheld gaming console that defined a generation. Modeled with attention to classic details like the directional pad, A/B buttons, and retro screen, it captures the nostalgic charm of portable gaming from the '90s.
            </p>
            </div>

            <div className=' absolute left-40 top-[110%] flex flex-col gap-3 '>Evolution
            <h1 id='game-tag' className='text-3xl'>Game Boy <span id='game-tag' className='text-red-600'>E</span><span id='game-tag' className='text-purple-600'>V</span><span id='game-tag' className='text-green-600'>O</span><span id='game-tag'  className='text-yellow-600'>L</span><span id='game-tag'  className='text-blue-400'>U</span>                <span id='game-tag' className='text-red-600'>T</span><span id='game-tag' className='text-purple-600'>I</span><span id='game-tag' className='text-green-600'>O</span><span id='game-tag'  className='text-yellow-600'>N</span>            
               </h1>
               <div className='w-96 h-96'>
                <GameBoyTimeline/>
               </div>
            </div>

            <div className=' left-40 absolute top-[210%] flex flex-col gap-3 items-center justify-center '>
            <div className=' absolute top-6 h-[130%] w-[120%] bg-[#5D91FE] '>

            </div>
                

                          <h1 id='shell' style={{marginTop:"80px"}} className='text-[10vw] z-10 text-white'>GAME BOY EMULATOR</h1>
                          <h1 id='head' style={{marginTop:"50px"}} className='text-9xl z-80 '><span id='head' className='text-red-600'>C</span><span id='head' className='text-purple-600'>O</span><span id='head' className='text-green-600'>L</span><span id='head'  className='text-yellow-600'>O</span><span id='head'  className='text-blue-800'>R</span> </h1>
           
           

             <div className=' h-96 w-96 absolute -top-20 right-30 z-100'>
              <img src="/Cloud.png" alt="" className='h-full w-full object-cover' />
             </div>
             <div className=' h-96 w-96 absolute top-40  left-30 z-100'>
              <img src="/Cloud.png" alt="" className='h-full w-full object-cover' />
             </div>
             <div className=' h-96 w-96 absolute top-80  left-180 z-100'>
              <img src="/Cloud.png" alt="" className='h-full w-full object-cover' />
             </div>

           
             <div className=' h-50 w-50 absolute top-80  left-270 z-100'>
              <img src="./block.png" alt=""  />
             </div>
             <div className=' h-50 w-50 absolute top-80  left-250 z-100'>
              <img src="./block.png" alt=""  />
             </div>

             <div className=' h-50 w-50 absolute top-120  left-20 z-100'>
              <img src="./block.png" alt=""  />
             </div>
             <div className=' h-50 w-50 absolute top-120  left-0 z-100'>
              <img src="./block.png" alt=""  />
             </div>
             
            </div>
      </div>
  


    </div>
    </>
  )
}

export default Dashboard