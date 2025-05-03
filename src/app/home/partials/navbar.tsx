import { Mail } from 'lucide-react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  return (
    <header>
      <div className='flex-between h-16 md:h-21 custom-container'>
        <Image
          src='/icons/logo.jpg'
          alt='Logo'
          width={40}
          height={40}
          className=''
        />
        <nav className='hidden md:block'>
          <ul className='flex-start space-4'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href} className='hover:text-primary-200 px-2'>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" flex-center gap-4 cursor-pointer">
          <Button >
              <Mail />
              <span className="hidden lg:block">Hire Me</span>
          </Button>
          <Menu className="md:hidden"/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
