import Image from 'next/image';

import { reviewData } from '@/constants/reviewData';

const ReviewCard = () => {
  return (
    <div className='rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'>
      {reviewData.map((data, i) => (
        <div
          key={i}
          className='flex flex-col rounded-full bg-neutral-500'
          style={{
            gap: 'clamp(0.75rem, 1.66vw, 1.25rem)',
            padding: 'clamp(1rem, 1.66vw, 1.25rem)',
          }}
        >
          <div className='flex-start'>
            <div className='rounded-full'>
              <Image
                src={data.src}
                alt={data.name}
                style={{ height: 'clamp(3rem, 4.97vw, 3.75rem)' }}
              />
            </div>
            <div>
              <h3 className='text-md-bold text-neutral-100'>{data.name}</h3>
              <p className='text-md-regular text-neutral-200'>
                {data.position}
              </p>
            </div>
          </div>
          <div>
            <p className='text-md-regular text-neutral-200'>{data.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
