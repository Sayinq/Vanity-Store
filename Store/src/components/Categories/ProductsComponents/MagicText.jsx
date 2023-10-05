import React, { useEffect, useState } from 'react';

const MagicText = ({ rating }) => {
  const [stars, setStars] = useState([]);
  let textColor = '';

  useEffect(() => {
    const rand = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

      star.style.animation = "none";
      star.offsetHeight;
      star.style.animation = "";
    };

    const starElements = document.getElementsByClassName("magic-star");
    const starArray = Array.from(starElements);

    setStars(starArray);

    let index = 0;
    const interval = 1000;

    for (const star of starArray) {
      setTimeout(() => {
        animate(star);

        const intervalId = setInterval(() => animate(star), 5000);
        // Store the interval ID in state to clear it later
        setStars((prevStars) => [
          ...prevStars,
          { element: star, intervalId: intervalId },
        ]);
      }, index++ * (interval / 10));
    }

    // Cleanup: clear intervals when the component unmounts
    return () => {
      for (const starData of stars) {
        clearInterval(starData.intervalId);
      }
    };
  }, [rating]); 

  if (rating === 'Uncommon') {
    textColor = 'text-[#5187c9]';
  } else if (rating === 'Rare') {
    textColor='text-[#E69138]';
  } else if (rating === 'Legendary') {
    textColor='text-[#C241AD]'
  } else if (rating === 'Mythical') {
    textColor = 'text-[#e85e46]'
  };

  return (
    <h1>
        {rating === 'Legendary' || rating === 'Mythical' ? (
            <span className="magic">
                <span className="magic-star">
                <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg>
                </span>
                <span className="magic-star">
                <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg>
                </span>
                <span className="magic-star">
                <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg>
                </span>
            </span>
        ) : null}
        <span className={`magic-text text-xl font-black tracking-wider drop-shadow-md w-fit ${textColor}`}>{rating}</span>
    </h1>
  );
};

export default MagicText;