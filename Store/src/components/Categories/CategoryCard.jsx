import React from 'react'
import {Image} from '@nextui-org/react';
import { Link } from 'react-router-dom';
import useFadeInAnimation from '../../config/useFadeAnimation';

function CategoryCard({ imageSrc, categoryText }) {
  const { ref, style } = useFadeInAnimation();
  return (
    <Link to="/category/products">
      <div
        ref={ref} 
        style={style}
        className="flex max-w-full w-fit h-fit items-end justify-center cursor-pointer z-10 lg:p-2 md:py-0 py-4">
          <Image isZoomed isBlurred 
          src={imageSrc} 
          alt="CategoryCard" 
          className="w-screen 2xl:w-[425px] xl:w-[350px] md:w-[250px] 2xl:h-[415px] xl:h-[300px] md:h-[200px] sm:h-[600px] h-[400px] rounded-lg shadow-md z-10"/>
          <div className="flex flex-row w-full 2xl:w-[325px] xl:w-[275px] md:w-[250px] sm:w-[600px] max-w-[600px] h-fit items-center justify-between absolute z-30 overflow-hidden px-8 xl:mb-4 md:mb-2 mb-4 text-3xl drop-shadow-md pointer-events-none">
          <h2 className=
              "md:text-2xl sm:text-4xl text-3xl tracking-wider text-white font-bold uppercase drop-shadow-lg">
                  {categoryText}
          </h2>
          <ion-icon name="arrow-forward-circle"></ion-icon>
          </div>
      </div>
    </Link>
  )
}

export default CategoryCard