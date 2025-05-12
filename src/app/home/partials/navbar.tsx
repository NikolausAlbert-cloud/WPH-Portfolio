'use client';

import { motion } from 'framer-motion';
import { Menu, Mail, Repeat } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigationData';

const logoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      repeat: Infinity,
      type: 'spring',
      repeatType: 'reverse',
    },
  },
};

const navbarMenuVariants = {
  hover: {
    scale: 1.3,
    textShadow: '2px 2px 20px rgb(255,255,255)',
    transition: {
      duration: 0.3,
    },
  },
};

const Navbar = () => {
  return (
    <header className='fixed top-0 z-50 w-full bg-neutral-600'>
      <div className='flex-between custom-container relative h-16 md:h-21'>
        <motion.div
          variants={logoVariants}
          initial='hidden'
          animate='visible' 
        >
          <Image src='/icons/logoCo.svg' alt='LogoCo' width={40} height={40}  />
        </motion.div>
        <nav className='hidden md:block'>
          <ul className='flex-start gap-4'>
            {navigationData.map((data) => (
              <motion.li key={data.label}
                variants={navbarMenuVariants}
                whileHover='hover'
              >
                <div>
                  <Link
                    href={data.href}
                    className='text-md-regular cursor-pointer px-2 text-neutral-100'
                  >
                    {data.label}
                  </Link>
                </div>
                
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className='flex-center cursor-pointer gap-4'>
          <Button asChild>
            <Link href='#contact'>
              <Mail />
              <span className='hidden lg:block'>Hire Me</span>
            </Link>
          </Button>
          {/* Items in Menu icon up to max-size: md */}
          <Sheet>
            <SheetTrigger asChild>
              <Menu className='cursor-pointer md:hidden' />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className='h-16'>
                <motion.div variants={logoVariants} initial='hidden' animate='visible'>
                   <Image
                    src='/icons/logoCo.svg'
                    alt='LogoCo'
                    width={28}
                    height={28}
                    className='absolute top-4.5 left-5'
                  />
                </motion.div>
               
              </SheetTitle>
              <nav className='mt-5'>
                <ul className='flex flex-col gap-6'>
                  {navigationData.map((data) => (
                    <li key={data.label}>
                      <SheetClose asChild>
                        <Link
                          href={data.href}
                          className='text-md-regular cursor-pointer'
                        >
                          {data.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button className='mt-6 w-full'>
                <SheetClose asChild>
                  <Link href='#contact'>
                    <div className='flex-center cursor-pointer gap-2'>
                      <Mail />
                      <p>Hire Me</p>
                    </div>
                  </Link>
                </SheetClose>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
