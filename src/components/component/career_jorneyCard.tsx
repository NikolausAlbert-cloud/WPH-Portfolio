import { Building, CalendarDays } from 'lucide-react';

import { careerJourneyData } from '@/constants/career_journeyData';

const Career_journeyCard = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {careerJourneyData.map((item, i) => (
        <div 
          key={i}
          className='grid grid-cols-[5px_auto] gap-2 md:gap-6'
        >
          <div className="relative">
            {/* line */}
            <div className="w-1 bg-gradient-to-r from-pink-600 to-purple-500 h-[calc(100%)] left-1/2 "/>
            {/* circle */}
            <span className="ng-blue-500"></span>
          </div>
          <div className=' flex flex-col gap-3 md:gap-5 rounded-4xl bg-neutral-500 p-3 md:p-6 text-neutral-100'>
            <h3 className='text-md-bold md:display-xs-bold'>{item.title}</h3>
            <div className='flex flex-col md:flex-row w-fit text-sm-regular md:text-md-regular'>
              <p className="flex flex-row gap-[2px] md:gap-[6px] mb-3 md:mb-0">
                <Building size={20}/>
                {item.company}
              </p>
              <p className='flex-center md:size-7 bg-transparent'>
                <span className='size-1 rounded-full bg-neutral-100 hidden md:block' />
              </p>
              <p className="flex flex-row gap-[6px]">
                <CalendarDays size={20}/>
                {item.time}
              </p>
            </div>
            {item.tasks.map((task, j) => (
              <ul key={`${i}.${j}`} className="flex flex-col gap-3 md:gap-5 text-neutral-200 text-sm-regular md:text-md-regular list-disc list-inside">
                <li>{task.description}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Career_journeyCard;
