'use client';

import { motion } from 'framer-motion';
import React from 'react';

const lineVariants = {
  initial: {
    height: 0,
  },
  view: {
    height: '108%',
    transition: {
      duration: 3,
      ease: 'easeIn',
    },
  },
};

const Career_journeyLine = () => {
  return (
    <motion.div
      className='absolute left-1/2 w-1 translate-x-[-50%] bg-gradient-to-b from-pink-600 to-purple-500'
      variants={lineVariants}
      initial='initial'
      whileInView='view'
    />
  );
};

export default Career_journeyLine;
