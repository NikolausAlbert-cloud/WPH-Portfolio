import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const Hero_picture = () => {
  return (
    <section
      className='flex items-center flex-col relative pt-4 '
      style={{ height: 'clamp(7.06rem, 31.51vw, 23.79rem)' }}
    >
      <div className="custom-container w-full md:w-fit ">
        <Button asChild>
          <Link href='#'>View Portfolio</Link>
        </Button>
      </div>
      <div
        style={{
          opacity: 0.5,
          backgroundImage: 'url(/images/waves.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          zIndex: -1,
          inset: 0,
          height: 'clamp(8.31rem, 31.45vw, 23.75rem)',
        }}
      >
      </div>
      <div className='absolute inset-x-0 bottom-0 z-[-1] h-[100%] bg-gradient-to-b from-neutral-600 from-35% to-transparent to-50%'></div>
    </section>
  );
};

export default Hero_picture;
