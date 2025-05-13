import React from 'react';

import Career_journeyCard from '@/components/component/career_journeyCard';
import Section from '@/components/layouts/section';

const Career_journey = () => {
  return (
    <Section
      title='Career Journey'
      id='Career Journey'
      description='A visual timeline of key milestones and experiences from over the years.'
    >
      <Career_journeyCard />
    </Section>
  );
};

export default Career_journey;
