import React from 'react';

import { Marquee } from '@/components/ui/marquee';
import ReviewCard from '@/components/ui/reviewCard';

const What_people_say = () => {
  return (
    <section className='relative my-20'>
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
        <Marquee reverse>
          <ReviewCard />
        </Marquee>
        <Marquee>
          <ReviewCard />
        </Marquee>
        <div className='absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-neutral-600 to-transparent'></div>
        <div className='absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-neutral-600 to-transparent'></div>
      </div>
    </section>
  );
};

export default What_people_say;
