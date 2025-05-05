import React from 'react';

import ReviewCard from '@/components/ui/reviewCard';
import { Marquee } from '@/components/ui/marquee';

const What_people_say = () => {
  return (
    <section className="relative my-20">
      <div className="text-center">
        <h2 className="display-sm-extrabold md:display-2xl-extrabold text-neutral-100">
          What People Say About Me
        </h2>
        <p className="text-sm-regular md:text-md-regular text-neutral-200 mt-3">
          Hear from clients and colleagues about their experiences working with
          me.
        </p>
      </div>
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 'clamp(0.75rem, 1.66vw, 1.25rem)',
        marginTop:"clamp(2rem, 3.97vw, 3rem)",
      }}
      >
        <Marquee>
          <ReviewCard />
        </Marquee>
        <Marquee duration={50}>
          <ReviewCard />
        </Marquee>
      </div>
    </section>
  );
};

export default What_people_say;
