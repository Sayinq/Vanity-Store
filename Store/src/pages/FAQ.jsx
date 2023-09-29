import React from 'react';
import NavbarComp from '../components/NavComponents/NavbarComp';
import '../../src/index.css';
import FAQAccordion from '../components/FAQComponents/FAQAccordion';
import { Image } from '@nextui-org/react';

const FAQ = () => {
  return (
    <main className="w-screen h-max bg-indigo-600 z-10">
        <NavbarComp />

        <section id="hero-section" className="w-screen h-[620px] relative overflow-hidden bg-green-500">
            <div className="flex flex-col items-center justify-center absolute top-0 w-full h-full max-h-[720px] text-white gap-y-4 z-30 sm:mt-0 mt-8">
                <h1 className="2xl:text-7xl text-5xl font-bold uppercase drop-shadow-lg">Featured Item</h1>
                <h5 className="text-lg text-center tracking-wide max-w-[600px] text-slate-400 px-12 drop-shadow-md">
                Your featured item description, something to add some initiative to click and explore for the user.
                </h5>
            </div>
        </section>

        <section id="categories-section" className="flex w-screen h-auto lg:pb-24 pt-12 pb-6 m-0 items-center justify-center">       
            <div id="categories-wrapper" className="flex w-full lg:flex-nowrap sm:flex-row sm:flex-wrap flex-col sm:items-stretch items-center 2xl:justify-center lg:justify-start justify-center max-w-[1536px]">

                {/* Left side including Categories cards */}
                <div id="categories-left" className="flex flex-col justify-center items-center content-center 2xl:w-fit xl:w-[70%] lg:max-w-[75%] md:w-[768px] sm:w-[1000px] w-fit">
                    <FAQAccordion />
                </div>

                {/* Right side with avatars and misc cards. */}
                <div id="categories-right" className="flex w-full xl:max-w-[30%] lg:max-w-[25%] md:w-fit max-w-[900px] md:h-fit h-full items-center lg:py-0 md:py-4">
                    <div id="wrapper" className="flex flex-wrap w-full h-fit items-center justify-center text-center cursor-pointer z-10 px-4">
                      <div className="flex lg:flex-col md:flex-row w-full max-w-[600px] h-fit items-center justify-center text-center cursor-pointer z-10 py-[6px]">
                          <Image isZoomed isBlurred 
                            src="./src/assets/images/banner-backgrounds/grid-banner-black.png" 
                            alt="QuickLinks" 
                            className="w-screen md:w-[345px] sm:h-[100px] h-[100px] max-h-[300px] rounded-lg shadow-md z-10"/>
                            <div className="flex flex-row text-white items-center xl:w-[115px] lg:w-[100px] md:w-[250px] sm:w-[550px] w-[275px] justify-between font-bold absolute z-30 uppercase lg:gap-x-0 gap-x-4 lg:text-xl text-4xl pointer-events-none">
                                <h2 className="lg:text-xl sm:text-4xl text-4xl tracking-wider drop-shadow-md uppercase">Support</h2>
                                <ion-icon name="arrow-forward-circle"></ion-icon>
                            </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default FAQ