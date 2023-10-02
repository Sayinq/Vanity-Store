import React from 'react'
import BannerCard from './BannerCard'

const BCCont = () => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap justify-center w-full h-fit 2xl:px-0 lg:px-4 px-8 z-20 xl:gap-x-0 lg:gap-x-4 md:gap-x-24 overflow-hidden mt-8 max-w-[1536px]">
        {/* Figure out routing link to the destination */}
        <BannerCard 
            imageSrc="./src/assets/images/banner-backgrounds/grid-banner-black.png"
            bannerText="Partners"
            secondImage="./src/assets/images/vanity_icon.png"
        />
        {/* Figure out routing link to the destination */}
        <BannerCard 
            imageSrc="./src/assets/images/banner-backgrounds/grid-banner-black.png"
            bannerText="Vanity +"
            secondImage="./src/assets/images/vanity_icon.png"
        />
        {/* Figure out routing link to the destination */}
        <BannerCard 
            imageSrc="./src/assets/images/banner-backgrounds/grid-banner-black.png"
            bannerText="Bundles"
            secondImage="./src/assets/images/vanity_icon.png"
        />
    </div>
  )
}

export default BCCont;