import React from 'react'
import {Image} from '@nextui-org/react';

function QuickLinks({ imageSrc, QLText }) {
    return (
      <div className="flex lg:flex-col md:flex-row w-full max-w-[600px] h-fit items-center justify-center text-center cursor-pointer z-10 py-[6px]">
        <Image isZoomed isBlurred 
            src={imageSrc} 
            alt="QuickLinks" 
            className="w-screen md:w-[345px] sm:h-[100px] h-[100px] max-h-[300px] rounded-lg shadow-md z-10"/>
            <div className="flex flex-row text-white items-center xl:w-[115px] lg:w-[100px] md:w-[250px] sm:w-[550px] w-[275px] justify-between font-bold absolute z-30 uppercase lg:gap-x-0 gap-x-4 lg:text-xl text-4xl pointer-events-none">
                <h2 className="lg:text-xl sm:text-4xl text-4xl tracking-wider drop-shadow-md">{QLText}</h2>
                <ion-icon name="arrow-forward-circle"></ion-icon>
            </div>
      </div>
    )
  }
  
  export default QuickLinks;