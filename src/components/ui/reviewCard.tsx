import Image from 'next/image';

import { reviewData } from '@/constants/reviewData';

const ReviewCard = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 'clamp(0.75rem, 1.66vw, 1.25rem)',
        position: 'relative',
      }}
    >
      {reviewData.map((data, i) => (
        <div
        key={i}
        className='p-0.2 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-500'
        >
          <div
            className='rounded-2xl bg-neutral-500 overflow-hidden hover:scale-99 hover:cursor-pointer transition-all duration-300'
            style={{
              padding: 'clamp(1rem, 1.66vw, 1.25rem)',
              height: 'clamp(13.44rem, 20.12vw, 15.19rem)',
              width: 'clamp(18.88rem, 41.39vw, 31.25rem)',
            }}
          >
            <div 
            className='flex-start'
            style={{gap:"clamp(0.5rem, 1.32vw, 1rem)"}}
            >
              <Image
                src={data.src}
                alt={data.name}
                style={{ height: 'clamp(3rem, 4.97vw, 3.75rem)', borderRadius: '90%' }}
              />
              <div>
                <h3 className='text-md-bold text-neutral-100'>{data.name}</h3>
                <p className='text-md-regular text-neutral-200'>
                  {data.position}
                </p>
              </div>
            </div>
            <div style={{marginTop:"clamp(0.75rem, 1.66vw, 1.25rem)"}}>
              <p className='text-md-regular text-neutral-200'>{data.review}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute left-0 bg-gradient-to-r from-neutral-600 to-transparent w-[25%] inset-y-0"></div>
      <div className="absolute right-0 bg-gradient-to-l from-neutral-600 to-transparent w-[25%] inset-y-0 "></div>
    </div>
  );
};

export default ReviewCard;
