import { Building, CalendarDays } from 'lucide-react';

import { careerJourneyData } from '@/constants/career_journeyData';

const Career_journeyCard = () => {
  return (
    <div className='grid grid-cols-[5rem_auto] gap-2 md:gap-6'>
      <div>
        <div />
        <span />
      </div>
      <div>
        {careerJourneyData.map((item, i) => (
          <div
            key={i}
            className='rounded-4xl bg-neutral-500 p-6 text-neutral-100'
          >
            <h3 className='diplay-xs-bold'>{item.title}</h3>
            <div className='flex-between w-fit'>
              <p className="flex flex-row">
                <Building size={20px}/>
                {item.company}
              </p>
              <p className='flex-center size-7 bg-transparent'>
                <span className='size-1 rounded-full bg-neutral-100' />
              </p>
              <p className="flex flex-row">
                <CalendarDays />
                {item.time}
              </p>
            </div>
            {item.tasks.map((task, j) => (
              <ul key={`${i}.${j}`}>
                <li>{task.description}</li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career_journeyCard;
