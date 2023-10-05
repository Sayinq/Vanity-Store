import React from 'react'
import { Link } from 'react-router-dom';

const BundlesCard = () => {
  return (
    <div id="bundles-button" 
        className="flex flex-row justify-between lg:ml-0 md:ml-4 items-center w-11/12 2xl:max-w-[1030px] xl:w-full lg:w-[710px] md:w-[640px] sm:max-w-3xl md:h-[100px] sm:h-[90px] h-[75px] max-h-[100px] bg-[#131313] rounded-lg">
        <div id="image-holder" className="max-w-fit px-4">
            <img 
                src="../src/assets/images/vanity_icon.png" 
                className="w-16 h-16 md:w-24 md:h-24"
            />
        </div>
        <div id="content-holder" className="flex xl:flex-row xl:gap-x-24 flex-col w-fit h-auto items-center p-4 text-slate-400 pr-8">
            <h1 className="italic self-start 2xl:text-4xl md:text-xl drop-shadow-md">Bundles</h1>
            <span className="text-[10px] 2xl:text-lg md:text-xs">Save money by buying in bulk.</span>
        </div>
        <Link to="/category/products" className="flex items-center justify-center pl-[10px] h-full w-[50px] md:w-[70px] rounded-r-lg bg-gradient-to-r from-violet-600 to-indigo-400">
            <button className="flex justify-center items-center text-white pr-2 text-3xl">
                <ion-icon name="arrow-forward-circle"></ion-icon>
            </button>
        </Link>
    </div>
  )
}

export default BundlesCard