import { Table } from '@radix-ui/themes';
import React from 'react';

import { cn } from '@/lib/utils';

const Table_radixUi = ({
  className,
  ...props
}: React.ComponentProps<typeof Table.Root>) => {
  return (
    <Table.Root
      className={cn('rounded-3xl bg-neutral-500 p-6', className)}
      {...props}
    />
  );
};

const TableHeader_radixUi = ({
  className,
  ...props
}: React.ComponentProps<typeof Table.Header>) => {
  return (
    <Table.Header
      className={cn(
        'rounded-full bg-gradient-to-r from-pink-600 to-purple-500',
        className
      )}
      {...props}
    />
  );
};

const TableBody_radixUi = ({
  className,
  ...props
}: React.ComponentProps<typeof Table.Body>) => {
  return <Table.Body className={cn(className)} {...props} />;
};

const TableRow_radixUi = ({
  className,
  ...props
}: React.ComponentProps<typeof Table.Row>) => {
  return <Table.Row 
  className={cn("border-neutral-400 border-t-1 first:border-t-0", className)} {...props}
  />;
};

const TableColumHeaderCell_radixUi = ({
  children,
  ...props
}: React.ComponentProps<typeof Table.ColumnHeaderCell>) => {
 
  return (
    <Table.ColumnHeaderCell
      className={'h-14 text-sm-semibold md:text-md-bold text-center text-neutral-100 first:rounded-l-full nth-last-1:rounded-r-full'}
      style={{width:"clamp(11.44rem, 30.63vw, 23.13rem"}}
      {...props}
    >
      {children}
    </Table.ColumnHeaderCell>
  );
};

const TableRowHeaderCell_radixUi = ({
  children,
  ...props
}: React.ComponentProps<typeof Table.RowHeaderCell>) => {
  return (
    <Table.RowHeaderCell 
      className={'h-18 text-sm-semibold md:text-md-semibold text-neutral-100'} 
      style={{width:"clamp(11.44rem, 30.63vw, 23.13rem)"}}  
      {...props}
    >
      {children}
    </Table.RowHeaderCell>
  );
};

const TableCell_radixUi = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Table.Cell>) => {
  return (
    <Table.Cell className={cn('relative', className)} {...props}>
      {children}
    </Table.Cell>
  );
};

export {
  Table_radixUi,
  TableHeader_radixUi,
  TableBody_radixUi,
  TableRow_radixUi,
  TableColumHeaderCell_radixUi,
  TableRowHeaderCell_radixUi,
  TableCell_radixUi,
};
