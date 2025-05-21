"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ProjectExpData } from '@/constants/projectExpData';

const cardVariants = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  view: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

export const ProjectExpCard = () => {
  return (
    <div className='flex-center relative flex flex-1 flex-wrap gap-8 md:gap-3'>
      {ProjectExpData.map((item, i) => (
        <motion.div
          key={i}
          style={{
            width: 'clamp(19rem, 30.63vw, 23.13rem)',
          }}
          variants={cardVariants}
          initial='initial'
          whileInView='view'
        >
          <Image
            src={item.src}
            alt={`${item.title}-${i}`}
            className='mb-3 rounded-3xl md:mb-4 md:rounded-4xl'
          />
          <div className='mb-3 flex flex-col gap-2 md:mb-10 md:gap-3'>
            <h3 className='text-lg-bold md:text-xl-bold text-neutral-100'>
              {item.title}
            </h3>
            <ul className='flex-start gap-2'>
              {item.skills.map((item) => (
                <li
                  key={item.skill}
                  className='rounded-full border border-neutral-300 px-4 py-2'
                >
                  {item.skill}
                </li>
              ))}
            </ul>
            <p className='text-sm-regular md:text-md-regular min-h-12 text-neutral-200 md:h-15'>
              {item.description}
            </p>
          </div>
          <button className='h-7 cursor-pointer md:h-8'>
            <Link
              href='#'
              className='flex flex-row items-center md:items-start'
            >
              <span className='tex-md-bold md:text-lg-bold bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text pr-1.5 text-transparent md:pr-3'>
                Visit
              </span>
              <Image
                src='/icons/upRightArrow.svg'
                alt='upRightArrow'
                width='10'
                height='10'
                className='mt-0 max-sm:size-3 md:mt-2'
              />
            </Link>
          </button>
        </motion.div>
      ))}

      {/* "Detail" Info only in xl size */}
      <div className='invisible absolute top-[206px] left-1/2 translate-x-[15px] rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-1 text-center xl:max-2xl:visible'>
        <div className='text-md-semibold flex-center aspect-square w-25 rotate-[-10deg] rounded-full bg-neutral-500 text-neutral-100'>
          <p>Detail</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectExpCard;
