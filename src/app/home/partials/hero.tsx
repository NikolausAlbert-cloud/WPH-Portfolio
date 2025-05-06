import React from 'react';

const Hero = () => {
  return (
    <section 
    className='custom-container flex-center flex-col items-center'
    style={{marginTop:"clamp(6.5rem, 18.38vw, 13.88rem)"}}>
      <div className='rounded-full bg-gradient-to-r from-pink-600 to-purple-500 p-0.25 shadow-[0_0_17px_rgba(135,70,235,1)]'>
        <div className='text-xs-medium md:text-md-medium rounded-full bg-neutral-500 px-6 py-2'>
          <span className="animate-pulse">&#128100;</span>&nbsp;<span className="animate-pulse">Niko's PortFolio</span>
        </div>
      </div>
      <h1 className='display-xl-bold md:display-3xl-extrabold my-6 text-center'>
        I am a&nbsp;
        <span className='relative inline-block bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'>
          <span className='inline-block bg-neutral-600'>
            <span className='absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'>
              <span
                className='bg-neutral-100'
                style={{
                  display: 'block',
                  width: 'clamp(0.55rem, 1.61vw, 1.22rem)',
                  height: 'clamp(0.43rem, 0.85vw, 0.64rem)',
                }}
              ></span>
            </span>
            <span className='absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'>
              <span
                className='bg-neutral-100'
                style={{
                  display: 'block',
                  width: 'clamp(0.55rem, 1.61vw, 1.22rem)',
                  height: 'clamp(0.43rem, 0.85vw, 0.64rem)',
                }}
              ></span>
            </span>
            <span className='absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%] bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'>
              <span
                className='bg-neutral-100'
                style={{
                  display: 'block',
                  width: 'clamp(0.55rem, 1.61vw, 1.22rem)',
                  height: 'clamp(0.43rem, 0.85vw, 0.64rem)',
                }}
              ></span>
            </span>
            <span className='absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%] bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'>
              <span
                className='bg-neutral-100'
                style={{
                  display: 'block',
                  width: 'clamp(0.55rem, 1.61vw, 1.22rem)',
                  height: 'clamp(0.43rem, 0.85vw, 0.64rem)',
                }}
              ></span>
            </span>
            <span className='bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent'>
              &nbsp;Front-End Developer&nbsp;
            </span>
          </span>
        </span>
        &nbsp;& Web Programming Instructor
      </h1>
      <p className='text-center text-neutral-200'>
        Hi, I’m Niko, a passionate web developer with over{' '}
        <span className='text-neutral-100'>1 year of experience</span> in
        creating responsive websites. I also teach aspiring developers to master
        modern web programming and bring their ideas to life.
      </p>
    </section>
  );
};

export default Hero;
