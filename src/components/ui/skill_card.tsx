
import React from 'react';

import { cn } from '@/lib/utils';

type SkillCardProps = {
  children: React.ReactNode;
  className?: string;
};

const Skill_card: React.FC<SkillCardProps> = ({ children, className }) => {
  return (
    <div
      className={cn('absolute rounded-sm bg-gradient-to-r from-pink-600 to-purple-500 p-[0.8px]', className)} >
      <div
        className='flex-center rounded-sm bg-neutral-500 md:rounded-md'
        style={{
          width: 'clamp(5.5rem, 13.41vw, 10.13rem)',
          height: 'clamp(2.69rem, 6.62vw, 5rem)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Skill_card;
