import React, { useEffect, useRef } from 'react';
import useFadeInAnimation from '../../config/useFadeAnimation';
import Contributors from '../LowerComponents/Contributors';
import QLCont from '../LowerComponents/QLCont';
import Contact from '../LowerComponents/Contact';
import payments_accepted from '../../assets/images/payments_accepted.png';

function CategoriesRight() {
  const { ref, style } = useFadeInAnimation();

  return (
    <div
      id="categories-right"
      ref={ref}
      style={style}
      className="flex w-full xl:max-w-[30%] lg:max-w-[25%] md:w-fit max-w-[900px] md:h-fit h-full items-center lg:py-0 md:py-4"
    >
      <div
        id="wrapper"
        className="flex flex-wrap w-full h-fit items-center justify-center text-center cursor-pointer z-10 px-4"
      >
          <Contributors />
          <QLCont />
          <div
            id="category-payments"
            className="flex justify-center items-center bg-[#131313] w-full h-fit p-4 rounded-lg mb-4"
          >
            <img src={payments_accepted} className="p-2" />
          </div>
          <Contact />
      </div>
    </div>
  );
}

export default CategoriesRight;