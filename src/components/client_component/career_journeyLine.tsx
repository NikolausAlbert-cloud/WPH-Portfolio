'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

const lineVariants = {
  initial: {
    height: 0,
  },
  view: {
    height: '107%',
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
};

type Career_journeyLineProps = {
  className?: string;
}

const Career_journeyLine: React.FC<Career_journeyLineProps> = ({className}) => {
  return (
    <motion.div
      className={cn('absolute left-1/2 w-1 translate-x-[-50%] bg-gradient-to-b from-pink-600 to-purple-500', className)}
      variants={lineVariants}
      initial='initial'
      whileInView='view'
    />
  );
};

export default Career_journeyLine;
