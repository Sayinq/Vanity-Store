import React from 'react'
import {Image} from '@nextui-org/react';

function BannerCard({ imageSrc, bannerText, secondImage }) {
  return (
    <div className="flex lg:flex-row w-full md:max-w-full h-fit items-center justify-center text-center cursor-pointer z-10 py-3">
        <Image isZoomed 
        src={imageSrc} 
        alt="bannerCard" 
        className="w-screen 2xl:w-[480px] xl:w-[375px] lg:w-[325px] lg:h-[175px] sm:h-[225px] h-[150px] max-h-[300px] rounded-lg shadow-md z-10"/>
        <div className="flex absolute 2xl:w-[400px] xl:w-[350px] lg:w-[300px] md:w-[425px] w-[400px] items-center xl:justify-stretch lg:justify-center sm:justify-stretch justify-center">
          <img src={secondImage} className="absolute w-24 h-24 z-20 xl:flex lg:hidden sm:flex hidden pointer-events-none" />
          <h2 className="lg:text-5xl sm:text-6xl text-5xl tracking-wider 2xl:pl-40 xl:pl-32 lg:pl-0 md:pl-30 sm:pl-36 text-white font-bold absolute z-30 uppercase drop-shadow-md pointer-events-none">{bannerText}</h2>
        </div>
    </div>
  )
}

export default BannerCard;