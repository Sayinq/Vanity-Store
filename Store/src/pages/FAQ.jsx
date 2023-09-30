import React from 'react';
import NavbarComp from '../components/NavComponents/NavbarComp';
import '../../src/index.css';
import FAQAccordion from '../components/FAQComponents/FAQAccordion';
import { Image } from '@nextui-org/react';
import Footer from '../components/LowerComponents/Footer';

{/* Import Framer Motion and begin making DOMContentLoaded animations */}
{/* React page transition on route change */}

const FAQ = () => {
  return (
    <main className="w-screen h-max z-10">
        <NavbarComp />

        <section id="hero-section" className="w-screen h-[620px] relative overflow-hidden bg-[#131313]">
            <div className="flex flex-col items-center justify-center absolute top-0 w-full h-full max-h-[720px] text-white gap-y-4 z-30 sm:mt-0 mt-8">
                <h1 className="2xl:text-7xl text-5xl font-bold uppercase drop-shadow-lg">FAQ</h1>
                <h5 className="text-lg text-center tracking-wide max-w-[600px] text-slate-400 px-12 drop-shadow-md">
                Your FAQ description, something to clear whitespace with helpful dialogue.
                </h5>
            </div>
        </section>

        <section id="faq-section" className="flex w-screen h-max lg:pb-24 pt-12 pb-6 m-0 items-center justify-center lg:px-20 bg-black">       
            <div id="faq-wrapper" className="flex w-full lg:flex-nowrap sm:flex-row sm:flex-wrap flex-col sm:items-stretch items-center lg:justify-start justify-center max-w-[1536px]">

                {/* Left side of faq */}
                <div id="faq-left" className="flex flex-col justify-center items-center content-center 2xl:w-[50%] xl:w-[70%] lg:max-w-[60%] md:w-[768px] sm:w-[1000px] w-fit">
                    <FAQAccordion />
                </div>

                {/* Right side of faq */}
                <div id="faq-right" className="flex w-full xl:max-w-[50%] lg:max-w-[35%] md:w-fit max-w-[900px] lg:h-screen md:h-max lg:py-0 pb-4">
                    <div id="wrapper" className="flex lg:sticky relative top-[20px] flex-wrap w-full h-fit cursor-pointer z-10 px-4 gap-y-2">
                      <div id="sticky-wrapper" className="flex lg:flex-col md:flex-row w-full h-fit items-center justify-center text-center cursor-pointer z-10">
                          <Image isZoomed isBlurred 
                            src="./src/assets/images/banner-backgrounds/grid-banner-black.png" 
                            alt="QuickLinks" 
                            className="w-screen sticky 2xl:w-full md:w-[345px] h-[150px] rounded-lg shadow-md z-10"/>
                            <div className="flex flex-row text-white items-center lg:w-[200px] md:w-[250px] sm:w-[550px] w-[275px] justify-between font-bold absolute z-30 uppercase lg:gap-x-0 gap-x-4 lg:text-3xl text-4xl pointer-events-none">
                              <h2 className="lg:text-3xl sm:text-4xl text-4xl tracking-wider drop-shadow-md uppercase">Support</h2>
                              <ion-icon name="arrow-forward-circle"></ion-icon>
                            </div>
                      </div>
                      <div id="sticky-wrapper" className="flex lg:flex-col md:flex-row w-full h-fit items-center justify-center text-center cursor-pointer z-10">
                          <Image isZoomed isBlurred 
                            src="./src/assets/images/banner-backgrounds/grid-banner-black.png" 
                            alt="QuickLinks" 
                            className="w-screen sticky 2xl:w-full md:w-[345px] h-[150px] rounded-lg shadow-md z-10"/>
                            <div className="flex flex-row text-white items-center lg:w-[200px] md:w-[250px] sm:w-[550px] w-[275px] justify-between font-bold absolute z-30 uppercase lg:gap-x-0 gap-x-4 lg:text-3xl text-4xl pointer-events-none">
                              <h2 className="lg:text-3xl sm:text-4xl text-4xl tracking-wider drop-shadow-md uppercase">Community</h2>
                              <ion-icon name="arrow-forward-circle"></ion-icon>
                            </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </main>
  )
}

export default FAQ