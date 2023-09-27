import React from 'react'
import BannerCard from './BannerCard'

const BCCont = () => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap justify-center w-full h-fit 2xl:px-0 lg:px-4 px-8 z-20 xl:gap-x-0 lg:gap-x-4 md:gap-x-24 overflow-hidden mt-8 max-w-[1536px]">
        <BannerCard 
            imageSrc="./src/assets/images/banner-backgrounds/grid-banner-black.png"
            bannerText="Banner"
        />
        <BannerCard 
            imageSrc="./src/assets/images/banner-backgrounds/grid-banner-black.png"
            bannerText="Banner"
        />
        <BannerCard 
            imageSrc="./src/assets/images/banner-backgrounds/grid-banner-black.png"
            bannerText="Banner"
        />
    </div>
  )
}

export default BCCont;