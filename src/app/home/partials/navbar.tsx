import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className='logo'>
        <Image src="/icons/logo.svg" alt='Logo' width={40} height={40} />
      </div>
    </header>
  );
};

export default Navbar;
