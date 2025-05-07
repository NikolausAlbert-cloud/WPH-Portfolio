import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';

import { ProjectExpData } from '@/constants/projectExpData';

export const ProjectExpCard = () => {
  return (
    <div className='relative flex-center flex flex-1 flex-wrap gap-8 md:gap-3'>
      {ProjectExpData.map((item, i) => (
        <div
          key={i}
          style={{
            width: 'clamp(20rem, 30.63vw, 23.13rem)',
          }}
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
          <button className='flex flex-row gap-[3px] md:gap-[6px]'>
            <span className='tex-md-bold md:text-lg-bold bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent'>
              Visit
            </span>
            <Icon
              icon='uil:arrow-up-right'
              width='24'
              height='24'
              // className=" bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent"
              className='text-blue-500'
            />
          </button>
        </div>
      ))}
      
      {/* "Detail" Info only in xl size */}
      <div className="absolute invisible xl:visible max-xl:visible left-1/2 translate-x-[15px] top-[206px] bg-gradient-to-r from-pink-600 to-purple-500 rounded-full text-center p-1">
        <div className="text-md-semibold bg-neutral-500 rotate-[-10deg] text-neutral-100 rounded-full w-25 aspect-square flex-center"><p>Detail</p></div>
      </div>
    </div>
  );
};

export default ProjectExpCard;
