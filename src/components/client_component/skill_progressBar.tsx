import React from 'react'

import { cn } from '@/lib/utils';

import { NumberMotion } from '../ui/numberMotion';
import { Progress } from '../ui/progress';

type Skill_progressBarProps = {
  skill: string;
  percentage: number;
};

const Skill_progressBar: React.FC<Skill_progressBarProps> = ({
  skill,
  percentage,
}) => {

  const [progress, setProgress] = React.useState(0)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 1000)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className={cn('flex flex-col gap-[6px] leading-3 md:gap-3')}>
      <div className='flex-between text-sm-semibold md:text-md-semibold leading-6 md:leading-7.5'>
        <h4>{skill}</h4>
        <NumberMotion num={percentage} />
      </div>
      <Progress value={progress} />
    </div>
  )
}

export default Skill_progressBar;