'use client';

import { motion, useScroll } from 'motion/react';
import React, { useRef } from 'react';

const Career_journeyLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScroll({
    target: ref,
    offset: ['0 1', '1.5 1'],
  });

  return (
    <motion.div
      ref={ref}
      className='line-decoration absolute left-1/2 w-1 translate-x-[-50%] bg-gradient-to-b from-pink-600 to-purple-500'
      style={{
        scrollY: scrollYProgress,
      }}
    />
  );
};

export default Career_journeyLine;
