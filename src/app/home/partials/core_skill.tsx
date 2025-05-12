'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Section from '@/components/layouts/section';
import { NumberMotion } from '@/components/ui/numberMotion';
import { Progress } from '@/components/ui/progress';
import Skill_card from '@/components/ui/skill_card';

import { coreSkillData } from '@/constants/coreSkill_data';

const orbitVariants = {
  hidden: {
    hidden: {
      rotate: 0,
    },
  },
  visible: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 15,
      ease: 'linear',
    },
  },
};

const Core_skill = () => {
  return (
    <Section
      id='skills'
      title='My Core Skill'
      description='An overview of the key technologies and frameworks I specialize in'
      className='w-full'
    >
      <div className='flex flex-wrap items-center gap-26'>
        <motion.div
          className='flex-center relative flex-[6.8] basis-80'
          variants={orbitVariants}
          initial='hidden'
          animate='visible'
        >
          <Image
            src='/images/orbits.svg'
            alt='orbit'
            width={587}
            height={515}
            style={{
              width: 'clamp(20rem, 48.59vw, 36.69rem)',
              height: 'clamp(17.5rem, 42.63vw, 32.19rem)',
            }}
          />
          <Skill_card className='top-[10%] left-1/2 translate-x-[68.5%]'>
            <Image
              src='/images/html.svg'
              alt='html'
              width={52}
              height={52}
              style={{
                width: 'clamp(1.75rem, 4.30vw, 3.25rem)',
                aspectRatio: 1 / 1,
              }}
            />
          </Skill_card>
          <Skill_card className='top-[2%] right-1/2 translate-x-[-29%]'>
            <Image
              src='/images/css.svg'
              alt='css'
              width={52}
              height={52}
              style={{
                width: 'clamp(1.75rem, 4.30vw, 3.25rem)',
                aspectRatio: 1 / 1,
              }}
            />
          </Skill_card>
          <Skill_card className='top-[38%] right-1/2 translate-x-[-93%]'>
            <Image
              src='/images/js.svg'
              alt='js'
              width={52}
              height={52}
              style={{
                width: 'clamp(1.75rem, 4.30vw, 3.25rem)',
                aspectRatio: 1 / 1,
              }}
            />
          </Skill_card>
          <Skill_card className='top-[63.5%] left-1/2 translate-x-[32%]'>
            <Image
              src='/images/ts.svg'
              alt='ts'
              width={52}
              height={52}
              style={{
                width: 'clamp(1.75rem, 4.30vw, 3.25rem)',
                aspectRatio: 1 / 1,
              }}
            />
          </Skill_card>
          <Skill_card className='top-[74.5%] right-1/2 translate-x-[-29.6%]'>
            <Image
              src='/images/react.svg'
              alt='react'
              width={52}
              height={52}
              style={{
                width: 'clamp(1.75rem, 4.30vw, 3.25rem)',
                aspectRatio: 1 / 1,
              }}
            />
          </Skill_card>
          <Skill_card className='top-[31.8%] left-1/2 translate-x-[-7.5%]'>
            <Image
              src='/images/redux.svg'
              alt='redux'
              width={52}
              height={52}
              style={{
                width: 'clamp(1.75rem, 4.30vw, 3.25rem)',
                aspectRatio: 1 / 1,
              }}
            />
          </Skill_card>
        </motion.div>
        <div
          className='flex flex-[3.2] basis-80 flex-col justify-center gap-6 md:gap-5'
          style={{
            width: 'clamp(20rem, 38.82vw, 29.31rem)',
            height: 'clamp(23.25rem, 35.10vw, 26.5rem)',
          }}
        >
          {coreSkillData.map((item) => (
            <div
              key={item.skill}
              className='flex flex-col gap-[6px] leading-3 md:gap-3'
            >
              <div className='flex-between text-sm-semibold md:text-md-semibold leading-6 md:leading-7.5'>
                <h4>{item.skill}</h4>
                <NumberMotion num={item.percentage} />
              </div>
              <Progress value={item.percentage} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Core_skill;
