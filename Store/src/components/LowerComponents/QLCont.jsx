import React from 'react'
import QuickLinks from './QuickLinks.jsx'

const QLCont = () => {
  return (
    <div className="flex md:flex-nowrap flex-wrap md:justify-evenly justify-center md:w-fit w-full h-fit z-20 overflow-hidden md:p-2 gap-x-2">
        <QuickLinks 
            imageSrc="./src/assets/images/banner-backgrounds/grid-banner-black.png"
            QLText="Our FAQ"
        />
        <QuickLinks 
            imageSrc="./src/assets/images/banner-backgrounds/grid-banner-black.png"
            QLText="Our ToS"
        />
    </div>
  )
}

export default QLCont;