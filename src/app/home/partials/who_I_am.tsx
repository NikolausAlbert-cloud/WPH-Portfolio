import Image from 'next/image'
import React from 'react'

const Who_I_am = () => {
  return (
    <section className="relative">
      <div       
      className="custom-container flex-center flex-col"
      style={{
        margin:"auto",
        marginTop: "clamp(-2.81rem, 13.25vw, -10rem)",
        gap:"clamp(2.5rem, 6.62vw, 5rem)",
      }}
      >
        <div>
          <Image
            src="/images/person.jpg" 
            alt="hero image" 
            width={1160} 
            height={360}
            style={{
              width: "clamp(20rem, 96.02vw, 72.5rem)",
              height: "clamp(7.91rem, 38vw, 28.69rem)",
              borderRadius: "clamp(0.75rem, 1.99vw, 1.5rem)",
            }} 
          />
        </div>
        <div className="flex-start flex-wrap gap-3">
          <div className="flex-[-1.9] basis-80 max-w-65">
            <h2 className="display-sm-extrabold md:display-2xl-extrabold text-neutral-100">Who am I?</h2>
          </div>
          <div className="flex-[11.9] basis-80">
            <p className="text-neutral-200">Hi, I’m Niko, a Front-End Developer & Web Programming Instructor based in Jakarta. With over <span className="text-neutral-100 font-weight-semibold">1 year of experience</span>, I specialize in crafting interactive, responsive, and user-friendly websites that deliver exceptional digital experiences. My expertise spans across various industries, including e-commerce, education, and SaaS. I am proficient in modern front-end technologies, clean coding practices, and performance optimization. </p>
          </div>
        </div>
        <div className="flex-center flex-wrap md:flex-row gap-4 pb-10 md:pb-20">
          <div className="bg-gradient-to-r from-pink-600 to-purple-500 rounded-full p-0.5">
            <div 
            className="flex-center flex-col gap-2 bg-neutral-500 rounded-full"
            style={{width:"clamp(9.25rem, 22.6vw, 17.06rem)", height:"clamp(9.25rem, 22.6vw, 17.06rem)"}}>
              <h2 className="display-sm-extrabold md:display-2xl-extrabold text-neutral-100">3+</h2>
              <p className="text-sm-regular md:text-md-regular text-neutral-100">Years Experience</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-600 to-purple-500 rounded-full p-0.5">
            <div 
              className="flex-center flex-col gap-2 rounded-full"
              style={{width:"clamp(9.25rem, 22.6vw, 17.06rem)", height:"clamp(9.25rem, 22.6vw, 17.06rem)"}}>
              <h2 className="display-sm-extrabold md:display-2xl-extrabold text-neutral-100">30+</h2>
              <p className="text-sm-regular md:text-md-regular text-neutral-100">Projects</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-600 to-purple-500 rounded-full p-0.5">
            <div 
              className="flex-center flex-col gap-2 bg-neutral-500 rounded-full"
              style={{width:"clamp(9.25rem, 22.6vw, 17.06rem)", height:"clamp(9.25rem, 22.6vw, 17.06rem)"}}>
              <h2 className="display-sm-extrabold md:display-2xl-extrabold text-neutral-100">90+</h2>
              <p className="text-sm-regular md:text-md-regular text-neutral-100">Students</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-600 to-purple-500 rounded-full p-0.5">
            <div 
              className="flex-center flex-col gap-2 rounded-full"
              style={{width:"clamp(9.25rem, 22.6vw, 17.06rem)", height:"clamp(9.25rem, 22.6vw, 17.06rem)"}}>
              <h2 className="display-sm-extrabold md:display-2xl-extrabold text-neutral-100">10+</h2>
              <p className="text-sm-regular md:text-md-regular text-neutral-100">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Who_I_am;