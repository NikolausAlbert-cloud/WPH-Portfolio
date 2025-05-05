import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
  return (
    <section className="relative">
      <div       
        className="custom-container flex-center flex-col"
        style={{
          position: "absolute",
          top: "clamp(-2.81rem, 13.25vw, -10rem)",
          left:"0",
          right:"0",
          margin:"auto",
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
          <div className="Left: flex-[-1.9] basis-80">
            <h2 className="display-sm-extrabold md:display-2xl-extrabold text-neutral-100">Who am I?</h2>
          </div>
          <div className="flex-[11.9] basis-80">
            <p className="text-neutral-200">Hi, I’m Niko, a Front-End Developer & Web Programming Instructor based in Jakarta. With over <span className="text-neutral-100 font-weight-semibold">1 year of experience</span>, I specialize in crafting interactive, responsive, and user-friendly websites that deliver exceptional digital experiences. My expertise spans across various industries, including e-commerce, education, and SaaS. I am proficient in modern front-end technologies, clean coding practices, and performance optimization. </p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Hero2