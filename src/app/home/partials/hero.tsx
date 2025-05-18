"use client";

import React, { useEffect, useRef, useState } from 'react';

import Hero_smallWhiteBox from '@/components/component/hero_smallWhiteBox';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        setIsMobile(width < 569); //Change based on screen size
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      id='home'
      className='custom-container relative flex-center flex-col items-center'
      style={{ 
        paddingTop: 'clamp(6.5rem, 18.38vw, 13.88rem)', 
        backgroundImage: 'url(/background/repeatedBoxFrames_desktop.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
      ref={containerRef}
    >
      <div 
      style={{ 
        position: 'absolute',
        backgroundImage: 'url(/background/hero-ellipse-decoration.svg)',
        backgroundSize: 'cover',
        right: "0",
        backgroundRepeat: 'no-repeat',
        width: "clamp(2.5rem, 9.93vw, 7.5rem)",
        height: "clamp(2.5rem, 9.93vw, 7.5rem)",
      }}
      />
      <div
      style={{ 
        position: 'absolute',
        backgroundImage: 'url(/background/hero-circle-decoration.png)',
        backgroundSize: 'cover',
        left: "0%",
        top: "20%",
        opacity: "0.5",
        backgroundRepeat: 'no-repeat',
        width: "clamp(1.5rem, 9.93vw, 4.5rem)",
        height: "clamp(2.5rem, 9.93vw, 7.5rem)",
      }}
      />
      <div className='rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-0.25 shadow-[0_0_17px_rgba(135,70,235,1)]'>
        <div className='text-xs-medium md:text-md-medium rounded-full bg-neutral-500 px-6 py-2'>
          <span className='animate-pulse'>&#128100;</span>
          <span className='animate-pulse'>&nbsp;Niko&apos;s PortFolio</span>
        </div>
      </div>
      <h1 className='display-xl-bold md:display-3xl-extrabold my-6 text-center'>
        I am a&nbsp;
        {isMobile ? (
          <>
            <span className='relative inline-block bg-gradient-to-r from-pink-600 to-purple-500 p-0.5 mb-2'>
              <span className='inline-block bg-neutral-600'>
                <p className='bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent'>
                  Front-
                </p>
                <Hero_smallWhiteBox />
              </span>
            </span>
            <span className='relative inline-block bg-gradient-to-r from-pink-600 to-purple-500 p-0.5 '>
              <span className='inline-block bg-neutral-600'>
                <p className='bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent'>
                  End Developer&nbsp;
                </p>
                <Hero_smallWhiteBox />
              </span>
            </span>
          </>
        ) : (
          <span className='relative inline-block bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'>
            <span className='inline-block bg-neutral-600'>
              <p className='bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent'>
                Front-End Developer
              </p>
              <Hero_smallWhiteBox />
            </span>
          </span>
        )}
        &nbsp;& Web Programming Instructor
      </h1>
      <p className='text-center text-neutral-200'>
        Hi, I’m Niko, a passionate web developer with over{' '}
        <span className='text-neutral-100'>1 year of experience</span> in
        creating responsive websites. I also teach aspiring developers to master
        modern web programming and bring their ideas to life.
      </p>
    </section>
  );
};

export default Hero;
