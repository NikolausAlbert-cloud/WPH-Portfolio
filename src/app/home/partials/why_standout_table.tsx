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

import { DataTable, HeaderTable } from '@/constants/why_standout_data';

const Why_standout_table = () => {
  return (
    <Section
      id='why-standout'
      title='Why I Standout'
      description='A showcase of my unique approach and skill set compared to conventional front-end developers'
    >
      <Table_radixUi >
        <TableHeader_radixUi >
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
            <TableRow_radixUi key={i} >
              <TableRowHeaderCell_radixUi>
                {item.dataTitle_1}
              </TableRowHeaderCell_radixUi>
              <TableCell_radixUi>
                <Image 
                  src={item.dataTitle_2} alt={`data-${item.dataTitle_1}-me`} 
                  className="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] bg-gradient-to-r from-pink-600 to-purple-500 rounded-full w-7 aspect-square" 
                />
              </TableCell_radixUi>
              <TableCell_radixUi>
                <Image 
                  src={item.dataTitle_3} alt={`data-${item.dataTitle_1}-other`} 
                  className="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] bg-neutral-300 rounded-full w-7 aspect-square"
                />
              </TableCell_radixUi>
            </TableRow_radixUi>
          ))}
        </TableBody_radixUi>
      </Table_radixUi>
    </Section>
  );
};

export default Why_standout_table;