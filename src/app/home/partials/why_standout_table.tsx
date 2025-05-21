'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Section from '@/components/layouts/section';
import {
  Table_radixUi,
  TableHeader_radixUi,
  TableRow_radixUi,
  TableColumHeaderCell_radixUi,
  TableRowHeaderCell_radixUi,
  TableCell_radixUi,
  TableBody_radixUi,
} from '@/components/ui/table_radixUi';

import { DataTable, HeaderTable } from '@/constants/why_standoutData';

const tableVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

const Why_standout_table = () => {
  return (
    <Section
      id='why-standout'
      title='Why I Standout'
      description='A showcase of my unique approach and skill set compared to conventional front-end developers'
    >
      <motion.div
        variants={tableVariants}
        initial='hidden'
        whileInView='inView'
      >
        <Table_radixUi>
          <TableHeader_radixUi>
            <TableRow_radixUi>
              {HeaderTable.map((item) => (
                <TableColumHeaderCell_radixUi key={item.title}>
                  {item.title}
                </TableColumHeaderCell_radixUi>
              ))}
            </TableRow_radixUi>
          </TableHeader_radixUi>
          <TableBody_radixUi>
            {DataTable.map((item, i) => (
              <TableRow_radixUi key={i}>
                <TableRowHeaderCell_radixUi>
                  {item.dataTitle_1}
                </TableRowHeaderCell_radixUi>
                <TableCell_radixUi>
                  <Image
                    src={item.dataTitle_2}
                    alt={`data-${item.dataTitle_1}-me`}
                    className='absolute top-1/2 left-1/2 aspect-square w-7 translate-x-[-50%] translate-y-[-50%] rounded-full bg-gradient-to-r from-pink-600 to-purple-500'
                  />
                </TableCell_radixUi>
                <TableCell_radixUi>
                  <Image
                    src={item.dataTitle_3}
                    alt={`data-${item.dataTitle_1}-other`}
                    className='absolute top-1/2 left-1/2 aspect-square w-7 translate-x-[-50%] translate-y-[-50%] rounded-full bg-neutral-300'
                  />
                </TableCell_radixUi>
              </TableRow_radixUi>
            ))}
          </TableBody_radixUi>
        </Table_radixUi>
      </motion.div>
    </Section>
  );
};

export default Why_standout_table;
