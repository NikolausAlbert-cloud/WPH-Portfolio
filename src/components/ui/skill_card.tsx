'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

const planetVariants = {
  hidden: {
    rotate: 0,
    boxShadow: "-12px 4px 23px -26px rgba(138,19,237,0.26)"
  },
  visible: {
    rotate: -360,
    boxShadow: "-13px 25px 43px 24px rgba(138,19,237,0.55)",
    transition: {
      duration: 15,
      repeat: Infinity,
      boxShadow: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 15,
        ease: "easeInOut"
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
