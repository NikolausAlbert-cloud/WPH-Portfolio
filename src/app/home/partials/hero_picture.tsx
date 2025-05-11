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
          backgroundImage: 'url(/images/wave.svg)',
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
    </section>
  );
};

export default Hero_picture;
