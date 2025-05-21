'use client';

import { motion } from 'framer-motion';
import React from 'react';

import Section from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { faqData } from '@/constants/faqData';

const accordionVariants = {
  hidden: {
    x: "-100px",
    opacity: 0.5,
  },
  inView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Faq = () => {
  return (
    <Section
      id='faq'
      title='Frequently Asked Question'
      description='Find answers to some of the frequently asked questions below.'
      className='w-full'
    >
      <Accordion type='single' collapsible>
        {faqData.map((item, i) => (
          <motion.div
            key={i}
            className='mb-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-500 last:mb-0 has-data-[state=open]:p-[1px] md:mb-5'
            variants={accordionVariants}
            initial='hidden'
            whileInView='inView'
          >
            <AccordionItem
              value={`item-${i}`}
              className='rounded-2xl bg-neutral-500'
            >
              <AccordionTrigger className='group/trigger'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </Section>
  );
};

export default Faq;
