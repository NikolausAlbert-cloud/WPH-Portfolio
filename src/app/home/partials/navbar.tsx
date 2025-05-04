import { Mail } from 'lucide-react';
import { Menu } from 'lucide-react';
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

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className='flex-between custom-container h-16 md:h-21'>
        <Image
          src='/icons/logo.jpg'
          alt='Logo'
          width={40}
          height={40}
        />
        <nav className='hidden md:block'>
          <ul className='flex-start gap-4'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='text-md-regular hover:text-lg-regular px-2 text-neutral-100'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex-center cursor-pointer gap-4'>
          <Button asChild>
            <Link href='#'>
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
              <SheetTitle className="h-16">
                <Image
                  src='/icons/logo.jpg'
                  alt='Logo'
                  width={28}
                  height={28}
                  className='absolute top-4.5 left-5'
                />
              </SheetTitle>
              <nav className="mt-5">
                <ul className="flex flex-col gap-6">
                  {navigationData.map((data) => (
                    <li key={data.label}>
                      <SheetClose asChild>
                        <Link href={data.href} className="text-md-regular cursor-pointer">{data.label}</Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button className="mt-6 w-full">
                <SheetClose asChild>
                  <Link href="#">
                    <div className="flex-center cursor-pointer gap-2">
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
