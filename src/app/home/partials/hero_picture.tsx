"use client";

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const waveVariants: Variants = {
  hidden: {
    opacity: 0.5
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const Hero_picture = () => {
  return (
    <section
      className='relative flex flex-col items-center pt-4'
      style={{ height: 'clamp(7.06rem, 31.51vw, 23.79rem)' }}
    >
      <div className='custom-container w-full md:w-fit'>
        <Button asChild>
          <Link href='#'>View Portfolio</Link>
        </Button>
      </div>
        <motion.div
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
          variants={waveVariants}
          initial='hidden'
          animate='visible'
        />
    </section>
  );
};

export default Hero_picture;
