'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import Image from 'next/image';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('flex flex-col gap-3 p-4 md:gap-4 md:p-6', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
      data-slot='accordion-trigger'
      className={cn(
        'flex flex-1 cursor-pointer items-start justify-between text-md-semibold md:text-xl-semibold text-left',
        className
      )}
      {...props}
      >
        <div className='flex-1 text-left'>{children}</div>
        <div className='shrink-0'>
          <Image
            src='/icons/downArrow.png'
            alt='down-arrow'
            width={16}
            height={16}
            className='group-data-[state=open]/trigger:hidden'
          />
          <Image
            src='/icons/upArrow.png'
            alt='up-arrow'
            width={16}
            height={16}
            className='group-data-[state=closed]/trigger:hidden'
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm-regular md:text-md-regular overflow-hidden text-neutral-200'
      {...props}
    >
      <div className={cn(className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
