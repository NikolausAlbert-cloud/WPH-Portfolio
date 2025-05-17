import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { SocialMedia } from '@/constants/social_media';

const Footer = () => {
  return (
    <footer className='bg-neutral-500'>
      <div 
        className='custom-container flex flex-col-reverse items-start justify-start gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-7.5'
      >
        <div className='flex flex-row items-center gap-4'>
          <Image src='/icons/logoCo.svg' alt='logoCo' width={40} height={40} />
          <p>&copy;Niko2025</p>
        </div>
        <div className='flex-between gap-4'>
          {SocialMedia.map((data) => (
            <Link
              key={data.alt}
              href={data.alt}
              className='size-10 cursor-pointer md:size-12'
            >
              <Image src={data.src} alt={data.alt} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
