    import React from 'react'
import Nav from '../components/resusable/nav'
import Loader from '../components/resusable/transition-loader'

    
    function About() {
      return (
        <>
        <Loader/>
        <div className='h-screen w-full bg-[#f1eeee] flex items-center justify-center'>
          <Nav/>
               <h1 id='shell' className='text-8xl'>About Page</h1>
        </div>
        </>
      )
    }
    
    export default About