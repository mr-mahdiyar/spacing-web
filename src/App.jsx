import React from 'react'
import bgVideo from "./assets/earth-bg.mp4"
import { Navbar, Hero, Services, Banner, Banner2 } from "./"
const App = () => {
  return (
    <div>
      <div className='relative w-h-screen'>
        {/* video tag attributes: controls, autoplay, loop and muted */}
        <video autoPlay muted loop  className='fixed right-0 top-0 w-h-screen object-cover w-full -z-10'>
           {/* source uses for alternative formats that browser supports. */}
          <source src={bgVideo} type='video/mp4'/>
        </video>
        <Navbar />
        <Hero />
      </div>

      {/* services section */}
    <Services />
    <Banner />
    <Banner2 />
    </div>
  )
}

export default App
