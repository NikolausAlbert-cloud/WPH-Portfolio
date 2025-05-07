import React from 'react';

import Section from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { faqData } from '@/constants/faqData';

const Faq = () => {
  return (
    <Section
      id='faq'
      title='Frequently Asked Question'
      description='Find answers to some of the frequently asked questions below.'
      className="w-full"
    >
      <Accordion type='single' collapsible>
        {faqData.map((item, i) => (
          <div
          key={i} 
          className="mb-4 md:mb-5 last:mb-0 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-500 has-data-[state=open]:p-[1px]"
          >
            <AccordionItem 
            value={`item-${i}`} 
            className="bg-neutral-500 rounded-2xl"
            >
              <AccordionTrigger className="group/trigger">{item.title}</AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </Section>
  );
};

export default Faq;
