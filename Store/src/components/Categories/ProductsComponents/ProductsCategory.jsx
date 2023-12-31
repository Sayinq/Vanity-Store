import React from 'react'
import { Image } from '@nextui-org/react';
import gridBG from '../../../assets/images/banner-backgrounds/grid-banner-black.png';

const ProductsCategory = () => {
    const list = [
        {
            category: "Weapons",
            img: gridBG,
        },
        {
            category: "Armor",
            img: gridBG,
        },
        {
            category: "Tools",
            img: gridBG,
        },
        {
            category: "Pets",
            img: gridBG,
        },
        {
            category: "Hats",
            img: gridBG,
        },
        {
            category: "Emotes",
            img: gridBG,
        },
        {
            category: "Mounts",
            img: gridBG,
        },
        {
            category: "Banners",
            img: gridBG,
        },
        {
            category: "Effects",
            img: gridBG,
        },
    ];

    return (
        <>
        {list.map((item, index) => (
                <div id="sticky-wrapper" key={index} className="flex lg:flex-col md:flex-row w-full h-fit items-center justify-center text-center cursor-pointer z-10 mb-2">
                    <Image isZoomed isBlurred 
                    src={item.img} 
                    alt="QuickLinks" 
                    className="flex items-center justify-center w-screen sticky 2xl:w-full h-[100px] rounded-lg shadow-md z-10"/>
                    <h2 className="flex absolute font-bold lg:text-3xl sm:text-4xl text-4xl tracking-widest drop-shadow-md uppercase z-20">{item.category}</h2>
                </div>
            ))}
        </>
    )
}

export default ProductsCategory