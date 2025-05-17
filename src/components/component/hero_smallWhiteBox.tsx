import React from 'react'

const Hero_smallWhiteBox = () => {
  return (
    <>
      <span 
      className='absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'
      >
        <span
          className='bg-neutral-100'
          style={{
            display: 'block',
            width: 'clamp(0.55rem, 1.61vw, 1.22rem)',
            height: 'clamp(0.43rem, 0.85vw, 0.64rem)',
          }}
        ></span>
      </span>
      <span 
      className='absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'
      >
        <span
          className='bg-neutral-100'
          style={{
            display: 'block',
            width: 'clamp(0.55rem, 1.61vw, 1.22rem)',
            height: 'clamp(0.43rem, 0.85vw, 0.64rem)',
          }}
        ></span>
      </span>
      <span 
      className='absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%] bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'
      >
        <span
          className='bg-neutral-100'
          style={{
            display: 'block',
            width: 'clamp(0.55rem, 1.61vw, 1.22rem)',
            height: 'clamp(0.43rem, 0.85vw, 0.64rem)',
          }}
        ></span>
      </span>
      <span 
      className='absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%] bg-gradient-to-r from-pink-600 to-purple-500 p-0.5'
      >
        <span
          className='bg-neutral-100'
          style={{
            display: 'block',
            width: 'clamp(0.55rem, 1.61vw, 1.22rem)',
            height: 'clamp(0.43rem, 0.85vw, 0.64rem)',
          }}
        ></span>
      </span>
    </>
  )
}

export default Hero_smallWhiteBox