'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const bubbleExpVariants = {
  hidden: {
    boxShadow: '0px 1px 2px 3px rgba(255,112,124,0.74)',
  },
  visible: {
    boxShadow: '5px 5px 50px 14px rgba(161,16,145,0.37)',
    transition: {
      duration: 15,
      repeat: Infinity,
      boxShadow: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 5,
        ease: 'easeInOut',
      },
    },
  },
};

const Who_I_am = () => {
  return (
    <section id='about' className='relative'>
      <div
        className='custom-container flex-center flex-col'
        style={{
          margin: 'auto',
          // marginTop: 'clamp(-2.81rem, 13.25vw, -10rem)',
          gap: 'clamp(2.5rem, 6.62vw, 5rem)',
        }}
      >
        <div>
          <Image
            src='/images/person.jpg'
            alt='hero image'
            width={1160}
            height={360}
            style={{
              width: 'clamp(20rem, 96.02vw, 72.5rem)',
              height: 'clamp(7.91rem, 38vw, 28.69rem)',
              borderRadius: 'clamp(0.75rem, 1.99vw, 1.5rem)',
            }}
          />
        </div>
        <div className='flex-start flex-wrap'>
          <div className='max-w-115 flex-[2.5] basis-85'>
            <h2 className='display-sm-extrabold md:display-2xl-extrabold text-neutral-100'>
              Who am I?
            </h2>
          </div>
          <div className='flex-[7.7] basis-85'>
            <p className='text-neutral-200'>
              Hi, I’m Niko, a Front-End Developer & Web Programming Instructor
              based in Jakarta. With over{' '}
              <span className='font-weight-semibold text-neutral-100'>
                1 year of experience
              </span>
              , I specialize in crafting interactive, responsive, and
              user-friendly websites that deliver exceptional digital
              experiences. My expertise spans across various industries,
              including e-commerce, education, and SaaS. I am proficient in
              modern front-end technologies, clean coding practices, and
              performance optimization.{' '}
            </p>
          </div>
        </div>
        <div className='flex-center flex-wrap gap-4 pb-10 md:flex-row md:pb-20'>
          <motion.div 
            className='rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'
            variants={bubbleExpVariants}
            initial='hidden'
            animate='visible'
            >
            <div
              className='flex-center flex-col gap-2 rounded-full bg-neutral-500'
              style={{
                width: 'clamp(9.25rem, 22.6vw, 17.06rem)',
                height: 'clamp(9.25rem, 22.6vw, 17.06rem)',
              }}
            >
              <h2 className='display-sm-extrabold md:display-2xl-extrabold animate-bounce text-neutral-100'>
                3+
              </h2>
              <p className='text-sm-regular md:text-md-regular text-neutral-100'>
                Years Experience
              </p>
            </div>
          </motion.div>
          <div className='rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'>
            <motion.div
              className='flex-center flex-col gap-2 rounded-full'
              style={{
                width: 'clamp(9.25rem, 22.6vw, 17.06rem)',
                height: 'clamp(9.25rem, 22.6vw, 17.06rem)',
              }}
              variants={bubbleExpVariants}
              initial='hidden'
              animate='visible'
            >
              <h2 className='display-sm-extrabold md:display-2xl-extrabold animate-bounce text-neutral-100'>
                30+
              </h2>
              <p className='text-sm-regular md:text-md-regular text-neutral-100'>
                Projects
              </p>
            </motion.div>
          </div>
          <div className='rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'>
            <motion.div
              className='flex-center flex-col gap-2 rounded-full bg-neutral-500'
              style={{
                width: 'clamp(9.25rem, 22.6vw, 17.06rem)',
                height: 'clamp(9.25rem, 22.6vw, 17.06rem)',
              }}
              variants={bubbleExpVariants}
              initial='hidden'
              animate='visible'
            >
              <h2 className='display-sm-extrabold md:display-2xl-extrabold animate-bounce text-neutral-100'>
                90+
              </h2>
              <p className='text-sm-regular md:text-md-regular text-neutral-100'>
                Students
              </p>
            </motion.div>
          </div>
          <div className='rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'>
            <motion.div
              className='flex-center flex-col gap-2 rounded-full'
              style={{
                width: 'clamp(9.25rem, 22.6vw, 17.06rem)',
                height: 'clamp(9.25rem, 22.6vw, 17.06rem)',
              }}
              variants={bubbleExpVariants}
              initial='hidden'
              animate='visible'
            >
              <h2 className='display-sm-extrabold md:display-2xl-extrabold animate-bounce text-neutral-100'>
                10+
              </h2>
              <p className='text-sm-regular md:text-md-regular text-neutral-100'>
                Happy Clients
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who_I_am;
