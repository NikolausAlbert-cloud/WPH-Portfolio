import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const Hero1 = () => {
  return (
    <section
      className='flex-center relative mt-4 flex-col'
      style={{ height: 'clamp(7.06rem, 31.51vw, 23.79rem)' }}
    >
      <Button asChild className='absolute top-0'>
        <Link href='#'>View Portfolio</Link>
      </Button>
      <Image
        src='/images/waves.jpg'
        alt='waves'
        width={1208}
        height={190} 
        layout='responsive'
        className='absolute bottom-0'
      />
      <div 
      className="absolute inset-x-0 bottom-0 h-[100%] bg-gradient-to-b from-neutral-600 from-35% to-transparent to-90%" ></div> 
    </section>
  );
};

export default Hero1;
