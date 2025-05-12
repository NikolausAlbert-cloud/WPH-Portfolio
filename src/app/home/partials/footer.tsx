import { SocialMedia } from '@/constants/social_media'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-500 ">
      <div className="custom-container flex justify-start flex-col-reverse md:justify-between md:flex-row items-start  md:items-center  gap-6 py-10 md:py-7.5 ">
        <div className="flex flex-row items-center gap-4">
          <Image
            src="/icons/logoCo.svg"
            alt="logoCo"
            width={40}
            height={40}
          />
          <p>&copy;Niko2025</p>
        </div>
        <div className="flex-between gap-4">
        {SocialMedia.map((data) => (
          <Link key={data.alt} href={data.alt} className="size-10 md:size-12 cursor-pointer">
            <Image
              src={data.src}
              alt={data.alt}
            />
          </Link>
        ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer