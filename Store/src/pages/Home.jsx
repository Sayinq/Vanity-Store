import React from 'react';
import NavbarComp from '../components/NavComponents/NavbarComp';
import '../../src/index.css';
import headervideo from '../assets/images/5pc.mp4';
import payments_accepted from '../assets/images/payments_accepted.png';
import BCCont from '../components/StoreComponents/BCCont';
import CCCont from '../components/Categories/CCCont'
import BundlesCard from '../components/StoreComponents/BundlesCard';
import Contributors from '../components/LowerComponents/Contributors';
import QLCont from '../components/LowerComponents/QLCont';
import Contact from '../components/LowerComponents/Contact';

const Home = () => {
  return (
    <main className="w-screen h-max bg-black">

        {/* Navbar Component */}
        <NavbarComp />

        {/* Hero Section */}
        <section id="hero-section" className="w-screen h-[620px] relative overflow-hidden">
            <div className="flex flex-col items-center justify-center absolute top-0 w-full h-full max-h-[720px] text-white gap-y-4 z-30 sm:mt-0 mt-8">
                <h1 className="2xl:text-7xl text-5xl font-bold uppercase drop-shadow-lg">Featured Item</h1>
                <h5 className="text-lg text-center tracking-wide max-w-[600px] text-slate-400 px-12 drop-shadow-md">
                Your featured item description, something to add some initiative to click and explore for the user.
                </h5>
            </div>
            <video autoPlay loop muted id="bg-video" className="absolute top-0 object-cover w-full h-full max-h-[720px] z-10">
            <source src={headervideo} type="video/mp4" />
            </video>
            <div id="bg-video-gradient" 
                className="absolute top-0 object-cover w-full h-full max-h-[720px] z-20 bg-gradient-to-t from-neutral-900/75 to-gray-900/5"></div>
        </section>

        {/* Button Cards for head of page */}
        <div id="store-header-buttons" className="flex w-screen justify-center pt-12">
            <BCCont />
        </div>

        {/* Categories Section */}
        <section id="categories-section" className="flex w-screen h-auto lg:pb-24 pt-12 pb-6 m-0 items-center justify-center">
4       
            <div id="categories-wrapper" className="flex w-full lg:flex-nowrap sm:flex-row sm:flex-wrap flex-col sm:items-stretch items-center 2xl:justify-center lg:justify-start justify-center max-w-[1536px]">

                {/* Left side including Categories cards */}
                <div id="categories-left" className="flex flex-col justify-center items-center content-center 2xl:w-fit xl:w-[70%] lg:max-w-[75%] md:w-[768px] sm:w-[1000px] w-fit">
                    <BundlesCard />
                    <CCCont />
                </div>

                {/* Right side with avatars and misc cards. */}
                <div id="categories-right" className="flex w-full xl:max-w-[30%] lg:max-w-[25%] md:w-fit max-w-[900px] md:h-fit h-full items-center lg:py-0 md:py-4">
                    <div id="wrapper" className="flex flex-wrap w-full h-fit items-center justify-center text-center cursor-pointer z-10 px-4">
                        <Contributors />
                        <QLCont />
                        <div id="category-payments" className="flex justify-center items-center bg-[#131313] w-full h-fit p-4 rounded-lg mb-4">
                            <img src={payments_accepted} className="p-2" />
                        </div>
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home