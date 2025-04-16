import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

function Loader() {
  const loadRef = useRef(null)
  const outRef = useRef(null)


   useGSAP(()=>{
     var tl = gsap.timeline();
  
        gsap.from(loadRef.current,{
          opacity:0,
          duration:0.4,
          repeat:-1,
          yoyo:true,
          ease:"power3"
        })
       tl.from(outRef.current,{
          display:"block",
          opacity:1,
      
          ease:"power3"
       })

       tl.to(outRef.current,{
          opacity:0,
        delay:0.8,
        ease:"power3"
     })
     tl.to(outRef.current,{
      display :"hidden",
    delay:0.8,
    ease:"power3"
 })
    

   })



  return (
    <div  ref={outRef} className='h-full w-full bg-[#f1eeee]  fixed top-0 z-100 '>
      
          <h1 
            ref={loadRef}
            id='shell' 
            className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-[#191919] text-outline bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text'>
            Loading..
          </h1>
        
      
    </div>
  );
}

export default Loader;
