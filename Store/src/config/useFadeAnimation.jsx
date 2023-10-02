import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useFadeInAnimation = (threshold = 0.2) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              element,
              {
                opacity: 0,
                y: -25, // Initial y position
              },
              {
                opacity: 1,
                y: 0, // Final y position
                duration: 0.5,
                ease: 'power2.inOut',
              }
            );
            observer.unobserve(element);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (observer && element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return { ref: elementRef, style: { opacity: 0, y: -50 } };
};

export default useFadeInAnimation;

