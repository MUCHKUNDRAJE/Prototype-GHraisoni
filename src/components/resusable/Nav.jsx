import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
 
const [user, setUser] = useState("");
 

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        storedUser.photoURL
       
        setUser(storedUser.photo_url);
      }
    }, []);

     

  return (
       <nav style={{padding:'0px 30px'}} className='w-full h-14 flex items-center justify-between fixed  z-100  top-0'>
           <div>

           </div>
       <div className='flex gap-5  items-center justify-center'>
        <div className='flex gap-10'>
          <Link to={"/dashboard"}>Home</Link>
          <Link to={"/about"}>Heatmaps</Link>
        
        </div>
          <div className='  h-10 w-10 bg-blue-300 rounded-full overflow-hidden'>
          {user ? (
        <img src={user} alt="User Avatar" className="h-full w-full object-cover" />
     ) : (
     <div className="h-full w-full flex items-center justify-center text-white text-sm">
       ?
     </div>
  )}
          </div>
       </div>
       </nav>
  )
}

export default Nav