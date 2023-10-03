import React from 'react';
import '../../src/index.css';
import Transition from '../config/transition';
import { motion, AnimatePresence } from 'framer-motion';
import { slideAnimation, fadeAnimation } from '../config/motion';
import { Image } from '@nextui-org/react';
import headerVideo from '../assets/images/tarkovclip.mp4';
import ProductsCategory from '../components/Categories/ProductsComponents/ProductsCategory';
import ProductsCards from '../components/Categories/ProductsComponents/ProductsCards';
import FilterSelects from '../components/Categories/ProductsComponents/FilterSelects';

const Products = () => {
  return (
    <main className="w-screen h-max z-10 bg-black">

<section id="hero-section" className="w-screen h-[620px] relative overflow-hidden">
            <motion.div className="flex flex-col items-center justify-center absolute top-0 w-full h-full max-h-[720px] text-white gap-y-4 z-30 sm:mt-0 mt-8" {...fadeAnimation}>
                <h1 className="2xl:text-7xl text-5xl font-bold uppercase drop-shadow-lg">Products</h1>
                <h5 className="text-lg text-center tracking-wide max-w-[600px] text-slate-400 px-12 drop-shadow-md">
                Your featured item description, something to add some initiative to click and explore for the user.
                </h5>
            </motion.div>
            <video autoPlay loop muted id="bg-video" className="absolute top-0 object-cover w-full h-full max-h-[720px] z-10">
            <source src={headerVideo} type="video/mp4" />
            </video>
            <div id="bg-video-gradient" 
                className="absolute top-0 object-cover w-full h-full max-h-[720px] z-20 bg-gradient-to-t from-neutral-900/75 to-gray-900/5"></div>
        </section>

        <section id="products-section" className="flex flex-col w-screen h-max lg:pb-24 pt-12 pb-6 m-0 items-center justify-center">
          <div className="flex xl:flex-row lg:flex-col w-full h-fit py-6 max-w-[1200px] justify-center items-center bg-white mb-12 rounded-lg px-12 gap-4">
            <FilterSelects />
            <FilterSelects />
            <FilterSelects />
          </div>   
            <div id="products-wrapper" className="flex w-full lg:flex-nowrap sm:flex-row sm:flex-wrap flex-col sm:items-stretch items-center justify-center max-w-[1536px]">

                {/* Left side of Products */}
                <div id="products-left" className="flex flex-col justify-center items-center content-center 2xl:w-[80%] xl:w-[70%] lg:max-w-[60%] md:w-[768px] sm:w-[1000px] w-fit">
                    <ProductsCards />
                </div>

                {/* Right side of Products */}
                <AnimatePresence>
                  <motion.div id="products-right" className="flex w-full xl:max-w-[20%] lg:max-w-[35%] md:w-fit max-w-[900px] lg:py-0 pb-4 lg:px-0 px-4" {...slideAnimation('right')}>
                      <div id="wrapper" className="flex lg:sticky relative top-[20px] flex-wrap w-full h-fit cursor-pointer z-10 gap-y-2">
                        <ProductsCategory />
                      </div>
                  </motion.div>
                </AnimatePresence>
            </div>
        </section>
    </main>
  )
}

export default Transition(Products);