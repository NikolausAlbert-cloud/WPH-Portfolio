import { cn } from '@/lib/utils';
import React from 'react'

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
  description: string;
  id: string;
};

const Section:React.FC<SectionProps> = ({children, className,title, description, id}) => {
  return (
    <section id={id} className={cn("custom-container my-10 md:my-20", className)}>
      <div className="text-center">
        <h2 className='display-sm-extrabold md:display-2xl-extrabold text-neutral-100'>
          {title}
        </h2>
        <p className="text-sm-regular md:text-md-regular text-neutral-200 pt-3">
          {description}
        </p>
      </div>
      <div className="pt-8 md:pt-12">
        {children}
      </div>
    </section>
  )
}

export default Section