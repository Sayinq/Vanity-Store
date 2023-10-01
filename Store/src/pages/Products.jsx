import React from 'react';
import NavbarComp from '../components/NavComponents/NavbarComp';
import '../../src/index.css';
import Transition from '../config/transition';
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
  return (
    <main className="w-screen h-max bg-black">
        <AnimatePresence>
            <section id="hero-section" className="w-screen h-[620px] relative overflow-hidden bg-[#131313]">
                <div className="flex flex-col items-center justify-center absolute top-0 w-full h-full max-h-[720px] text-white gap-y-4 z-30 sm:mt-0 mt-8">
                    <h1 className="2xl:text-7xl text-5xl font-bold uppercase drop-shadow-lg">Category Products</h1>
                    <h5 className="text-lg text-center tracking-wide max-w-[600px] text-slate-400 px-12 drop-shadow-md">
                    Your description for the main area holding products with pricing.
                    </h5>
                </div>
            </section>
        </AnimatePresence>
    </main>
  )
}

export default Transition(Products);