// 'use client';

import { Building, CalendarDays } from 'lucide-react';
import React from 'react';

import { careerJourneyData } from '@/constants/career_journeyData';

import Career_journeyLine from '../client_component/career_journeyLine';

const Career_journeyCard: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-6 [&>div]:last:[&>div]:first:h-[calc(100%-2rem)] md:[&>div]:last:[&>div]:first:h-[calc(100%-1.5rem)]'>
      {careerJourneyData.map((item, i) => (
        <div key={i} className='grid grid-cols-[5px_auto] gap-2 md:gap-6'>
          <div className='relative w-5'>
            {/* line */}
              <Career_journeyLine  className="line-decoration"/>
            {/* circle */}
            <span className='ring-primary-100 absolute inset-0 size-5 rounded-full bg-gradient-to-r from-pink-600 to-purple-500 ring-5 ring-inset'></span>
          </div>
          <div className='flex flex-col gap-3 rounded-4xl bg-neutral-500 p-3 text-neutral-100 md:gap-5 md:p-6 ml-4'>
            <h3 className='text-md-bold md:display-xs-bold'>{item.title}</h3>
            <div className='text-sm-regular md:text-md-regular flex w-fit flex-col md:flex-row'>
              <p className='mb-3 flex flex-row gap-[2px] md:mb-0 md:gap-[6px]'>
                <Building size={20} />
                {item.company}
              </p>
              <p className='flex-center bg-transparent md:size-7'>
                <span className='hidden size-1 rounded-full bg-neutral-100 md:block' />
              </p>
              <p className='flex flex-row gap-[6px]'>
                <CalendarDays size={20} />
                {item.time}
              </p>
            </div>
            {item.tasks.map((task, j) => (
              <ul
                key={`${i}.${j}`}
                className='text-sm-regular md:text-md-regular flex list-outside list-disc ms-4 flex-col gap-3 text-neutral-200 md:gap-5 '
              >
                <li className="">{task.description}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Career_journeyCard;
