import React from 'react'
import {Image} from '@nextui-org/react';

function BannerCard({ imageSrc, bannerText }) {
  return (
    <div className="flex lg:flex-row w-full md:max-w-full h-fit items-center justify-center text-center cursor-pointer z-10 py-3">
        <Image isZoomed isBlurred 
        src={imageSrc} 
        alt="bannerCard" 
        className="w-screen 2xl:w-[480px] xl:w-[375px] lg:w-[325px] lg:h-[175px] sm:h-[225px] h-[150px] max-h-[300px] rounded-lg shadow-md z-10"/>
        <h2 className="lg:text-5xl sm:text-6xl text-5xl tracking-wider text-white font-bold absolute z-30 uppercase drop-shadow-md pointer-events-none">{bannerText}</h2>
    </div>
  )
}

export default BannerCard;