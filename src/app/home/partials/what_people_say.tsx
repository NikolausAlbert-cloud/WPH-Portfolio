"use client";

import React from 'react';

import ReviewCard from '@/components/component/reviewCard';
import { Marquee } from '@/components/ui/marquee';

const What_people_say = () => {
  return (
    <section className='custom-container relative py-20'>
      <div 
      style={{ 
        position: 'absolute',
        backgroundImage: 'url(/background/hero-ellipse-decoration.svg)',
        backgroundSize: 'cover',
        right: 0,
        top: "-20%",
        backgroundRepeat: 'no-repeat',
        width: "clamp(20rem, 52.98vw, 40rem)",
        aspectRatio: "1/1",
      }}
      />
      <div className='text-center'>
        <h2 className='display-sm-extrabold md:display-2xl-extrabold text-neutral-100'>
          What People Say About Me
        </h2>
        <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-200'>
          Hear from clients and colleagues about their experiences working with
          me.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(0.75rem, 1.66vw, 1.25rem)',
          marginTop: 'clamp(2rem, 3.97vw, 3rem)',
          overflow: 'hidden',
        }}
      >
        <Marquee className='[--duration:16s]'>
          <ReviewCard />
        </Marquee>
        <Marquee className='[--duration:12s]' reverse>
          <ReviewCard />
        </Marquee>
        <div className='absolute inset-y-0 left-0 w-[20%] md:bg-gradient-to-r from-neutral-600 to-transparent'></div>
        <div className='absolute inset-y-0 right-0 w-[20%] md:bg-gradient-to-l from-neutral-600 to-transparent'></div>
      </div>
    </section>
  );
};

export default What_people_say;
