import React from 'react'
import bgVideo from "./assets/earth-bg.mp4"
import { Navbar } from "./"
const App = () => {
  return (
    <div>
      <div className='relative'>
        {/* video tag attributes: controls, autoplay, loop and muted */}
        <video autoPlay muted loop className='relative right-0 top-0 w-h-screen object-cover z[-1]'>
           {/* source uses for alternative formats that browser supports. */}
          <source src={bgVideo} type='video/mp4'/>
        </video>
        <Navbar />
      </div>
    </div>
  )
}

export default App
