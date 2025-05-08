import { Table } from '@radix-ui/themes';
import React from 'react';

import { cn } from '@/lib/utils';

const Table_radixUi = ({
  className,
  ...props
}: React.ComponentProps<typeof Table.Root>) => {
  return (
    <Table.Root
      className={cn('w-full rounded-3xl bg-neutral-400 p-6', className)}
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
        'h-14 rounded-full bg-gradient-to-r from-pink-600 to-purple-500',
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
  return <Table.Body className={cn('', className)} {...props} />;
};

const TableRow_radixUi = ({
  className,
  ...props
}: React.ComponentProps<typeof Table.Row>) => {
  return <Table.Row className={cn(className)} {...props} />;
};

const TableColumHeaderCell_radixUi = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Table.ColumnHeaderCell>) => {
  return (
    <Table.ColumnHeaderCell
      className={cn(
        'text-sm-semibold md:text-md-bold text-center text-neutral-100',
        className
      )}
      {...props}
    >
      {children}
    </Table.ColumnHeaderCell>
  );
};

const TableRowHeaderCell_radixUi = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Table.RowHeaderCell>) => {
  return (
    <Table.RowHeaderCell className={cn('h-18', className)} {...props}>
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
    <Table.Cell className={cn('', className)} {...props}>
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
