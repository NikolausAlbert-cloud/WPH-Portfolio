'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  classNameContainer_l?: string;
  classNameContainer_r?: string;
  style?: object;
  title: string;
  description: string;
  id: string;
  variants?: any;
  view?: string;
};

const Section: React.FC<SectionProps> = ({
  children,
  className,
  classNameContainer_l,
  classNameContainer_r,
  title,
  id,
  description,
  variants,
  view,
}) => {
  return (
    <section
      id={id}
      className={cn('custom-container py-10 md:py-20', className)}
    >
      <motion.div 
        className={cn('text-center', classNameContainer_l)}
        variants={variants}
        whileInView={view}  
      >
        <h2 className={'display-sm-extrabold md:display-2xl-extrabold text-neutral-100'}>
          {title}
        </h2>
        <p className='text-sm-regular md:text-md-regular pt-3 text-neutral-200'>
          {description}
        </p>
      </motion.div>
      <div className={cn('pt-8 md:pt-12', classNameContainer_r)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
