import Image from 'next/image';
import React from 'react';

import Section from '@/components/layouts/section';
import { Progress } from '@/components/ui/progress';

import { coreSkillData } from '@/constants/coreSkill_data';

const Core_skill = () => {
  return (
    <Section
      id='core_skill'
      title='My Core Skill'
      description='An overview of the key technologies and frameworks I specialize in'
      className='w-full'
    >
      <div className='flex flex-wrap items-center gap-6'>
        <div className='flex-center relative flex-[6.8] basis-90'>
          <Image
            src='/images/orbits.svg'
            alt='orbit'
            style={
              {
                // width: "clamp(17.56rem, 42.63vw, 32.19rem)",
              }
            }
            width={515}
            height={515}
          />
        </div>
        <div
          className='flex flex-[3.2] basis-90 flex-col gap-6 md:gap-5'
          // style={{width:"clamp(20rem, 35.10vw, 26.5rem)"}}
        >
          {coreSkillData.map((item) => (
            <div
              key={item.skill}
              className='flex flex-col gap-[6px] leading-3 md:gap-3'
            >
              <div className='flex-between text-sm-semibold md:text-md-semibold leading-6 md:leading-7.5'>
                <h4>{item.skill}</h4>
                <p>{item.percentage}%</p>
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
