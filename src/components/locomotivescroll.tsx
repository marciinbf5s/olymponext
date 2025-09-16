// components/LocomotiveScrollWrapper.tsx
'use client';

import React, { useEffect, useRef, PropsWithChildren } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LocomotiveScrollWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollInstance = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: false,
      getDirection: true,
      getSpeed: true,
      firefoxMultiplier: 50,
      touchMultiplier: 2.5,
      lerp: 0.1,
      multiplier: 0.8,
      class: 'is-revealed',
      smartphone: {
        smooth: false
      },
      tablet: {
        smooth: false
      }
    });

    let timeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        scrollInstance.current?.update();
      }, 100);
    };

    const images = document.querySelectorAll('img');
    const handleImageLoad = () => {
      scrollInstance.current?.update();
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
      scrollInstance.current?.destroy();
    };
  }, []);

  return (
    <div
      id="scroll-container"
      data-scroll-container
      ref={scrollRef}
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transform: 'translate3d(0,0,0)'
      }}
    >
      {children}
    </div>
  );
};

export default LocomotiveScrollWrapper;
