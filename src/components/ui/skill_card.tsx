'use client';

import { motion, scale } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

const planetVariants = {
  hidden: {
    rotate: 0,
    boxShadow: "0px 1px 2px 3px rgba(255,112,124,0.74)",
    scale: 0.5,
  },
  visible: {
    rotate: -360,
    boxShadow: "0px 1px 35px 10px rgba(161,16,145,0.37)",
    scale: 1,
    transition: {
      duration: 15,
      repeat: Infinity,
      boxShadow: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
        ease: "easeInOut",
        
      },
      scale: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
        ease: "linear",
        
      },
      ease: 'linear',
    },
  },
};

type SkillCardProps = {
  children: React.ReactNode;
  className?: string;
};

const Skill_card: React.FC<SkillCardProps> = ({ children, className }) => {
  return (
    <motion.div
      className={cn(
        'absolute rounded-sm bg-gradient-to-r from-pink-600 to-purple-500 p-[0.8px]',
        className
      )}
      variants={planetVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        className='flex-center rounded-sm bg-neutral-500 md:rounded-md'
        style={{
          width: 'clamp(5.5rem, 13.41vw, 10.13rem)',
          height: 'clamp(2.69rem, 6.62vw, 5rem)',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Skill_card;
