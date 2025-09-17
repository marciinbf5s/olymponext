'use client';

import React, { useEffect, useRef, PropsWithChildren, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Dynamically import LocomotiveScroll to avoid SSR issues
const LocomotiveScroll = dynamic(
  () => import('locomotive-scroll').then((mod) => mod.default),
  { ssr: false }
);

const LocomotiveScrollWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollInstance = useRef<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Update scroll on window resize
  const updateScroll = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      scrollInstance.current?.update();
    }, 100);

    // Clear timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handle image load
  const handleImageLoad = useCallback(() => {
    if (scrollInstance.current) {
      scrollInstance.current.update();
    }
  }, []);

  // Set mounted state to true when component mounts
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Initialize Locomotive Scroll
  useEffect(() => {
    if (!isMounted || !scrollRef.current) return;

    // Initialize Locomotive Scroll
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
      },
      // Mobile configuration
      mobile: {
        smooth: false,
        breakpoint: 0,
        getDirection: true,
        getSpeed: true,
      },
      // Inertia configuration
      inertia: 0.9,
      touchInertiaMultiplier: 1.5
    });

    // Set up event listeners
    const images = document.querySelectorAll('img');
    
    // Handle existing images
    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    // Handle dynamically loaded images
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            const element = node as Element;
            const images = element.querySelectorAll('img');
            images.forEach((img) => {
              if (img.complete) {
                handleImageLoad();
              } else {
                img.addEventListener('load', handleImageLoad);
              }
            });
          }
        });
      });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    // Add resize listener
    window.addEventListener('resize', updateScroll, { passive: true });

    // Initialize scroll
    scrollInstance.current.init();

    // Cleanup function
    return () => {
      // Cleanup event listeners
      window.removeEventListener('resize', updateScroll);
      
      // Cleanup image load listeners
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
      
      // Disconnect observer
      observer.disconnect();
      
      // Clear any pending timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Destroy Locomotive Scroll instance
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
    };
  }, [handleImageLoad, updateScroll]);

  // Don't render the scroll container during SSR
  if (!isMounted) {
    return <div>{children}</div>;
  }

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
