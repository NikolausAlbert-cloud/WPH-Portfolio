import React from 'react';

import ReviewCard from '@/components/ui/reviewCard';

const What_people_say = () => {
  return (
    <section>
      <div>
        <h2>What People Say About Me</h2>
        <p>
          Hear from clients and colleagues about their experiences working with
          me.
        </p>
      </div>
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 'clamp(0.75rem, 1.66vw, 1.25rem)',
      }}
      >
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
};

export default What_people_say;
