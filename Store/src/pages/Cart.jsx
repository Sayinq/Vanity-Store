import React from 'react'
import '../../src/index.css';
import headerVideo from '../assets/images/multiclip.mp4';
import Transition from '../config/transition';
import { slideAnimation, fadeAnimation } from '../config/motion';
import { motion, AnimatePresence } from 'framer-motion';
import CardDetails from '../components/Categories/CartComponents/CardDetails';
import { Link as RouterLink } from 'react-router-dom'; 


const Cart = () => {
  return (
    <main>
        <AnimatePresence>
            <section id="hero-section" className="w-screen h-[620px] relative overflow-hidden">
                    <motion.div className="flex flex-col items-center justify-center absolute top-0 w-full h-full max-h-[720px] text-white gap-y-4 z-30 sm:mt-0 mt-8" {...fadeAnimation}>
                        <h1 className="2xl:text-7xl text-5xl font-bold uppercase drop-shadow-lg">Checkout</h1>
                        <h5 className="text-lg text-center tracking-wide max-w-[600px] text-slate-400 px-12 drop-shadow-md">
                        Your checkout description, something to add initiative for spending.
                        </h5>
                    </motion.div>
                    <video autoPlay loop muted id="bg-video" className="absolute top-0 object-cover w-full h-full max-h-[720px] z-10">
                    <source src={headerVideo} type="video/mp4" />
                    </video>
                    <div id="bg-video-gradient" 
                        className="absolute top-0 object-cover w-full h-full max-h-[720px] z-20 bg-gradient-to-t from-neutral-900/75 to-gray-900/5"></div>
            </section>
            <section id="cart-section" className="flex w-screen h-max py-8 m-0 items-center justify-center lg:px-20 bg-black">       
                <div id="cart-wrapper" className="flex w-full lg:flex-nowrap sm:flex-row sm:flex-wrap flex-col sm:items-stretch items-center justify-center max-w-[1536px]">

                    <div id="cart-items" className="flex flex-col relative lg:translate-x-2 lg:-translate-y-0 translate-y-4 w-full lg:max-w-[900px] sm:max-w-[600px] max-w-[350px] p-8 gap-y-8 lg:rounded-l-md lg:rounded-tr-none rounded-t-md bg-[#131313] gap-x-4">
                        <h1 className="text-xl font-bold tracking-wider">Your Cart</h1>
                        <div id="cart-items-wrapper" className="flex flex-wrap">
                            <div id="cart-item" className="flex flex-row w-full items-center py-4">
                                <div className="flex flex-row w-full items-center sm:gap-x-8 gap-x-4">
                                    <RouterLink to="/category/products">
                                        <img 
                                            src="https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0_384_N.webp"
                                            className="w-[50px] h-[50px] rounded-full"    
                                        />
                                    </RouterLink>
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold">Item ID</span>
                                        <p className="sm:text-sm text-xs font-medium text-slate-400">Category</p>
                                    </div>
                                    <span className="sm:ml-8">Item price</span>
                                </div>
                                <div className="text-4xl text-[#fc0303]">
                                    <button className="flex items-center justify-center">
                                        <ion-icon name="close-circle-outline"></ion-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-between place-self-end items-center">
                            <RouterLink to="/category/products" className="flex flex-row items-center w-fit h-fit gap-x-2">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                                <span className="">Continue Shopping</span>
                            </RouterLink>
                            <div id="subtotal" className="flex flex-col w-fit h-fit justify-center items-center gap-x-4">
                                <span className="font-semibold text-slate-400">Subtotal:</span>
                                <span className="font-bold text-green-500">Price</span>
                            </div>
                        </div>
                    </div>

                    <CardDetails />
                </div>
        </section>
        </AnimatePresence>
    </main>
    );
}

export default Transition(Cart);