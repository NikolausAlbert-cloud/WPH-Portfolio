import React from 'react';

import ProjectExpCard from '@/components/component/projectExpCard';

const Project_exp = () => {
  return (
    <section id="projects" className='custom-container py-10 md:py-20'>
      <div className='mb-8 flex flex-col gap-3 md:mb-12 md:flex-row md:gap-7'>
        <h2 className='display-sm-bold md:display-2xl-extrabold text-neutral-100 text-left'>
          Experience in Front-End Development
        </h2>
        <p className='text-sm-regular md:text-md-regular text-left md:text-right text-neutral-200'>
          I have experience developing 30+ web projects across various
          industries, including marketplaces, health, fashion, sports, and more.
          Implemented 1000+ responsive web pages with interactive features and
          smooth animations.
        </p>
      </div>
      <ProjectExpCard />
    </section>
  );
};

export default Project_exp;
