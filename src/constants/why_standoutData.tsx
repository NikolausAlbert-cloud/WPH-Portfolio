import { StaticImageData } from 'next/image';

import CheckIcon from '../../public/icons/check.svg';
import UncheckIcon from '../../public/icons/uncheck.svg';

type HeaderTableProps = {
  title: string;
};

const HeaderTable: HeaderTableProps[] = [
  {
    title: 'Skill',
  },
  {
    title: 'Me',
  },
  {
    title: 'Other',
  },
]

type DataTableProps = {
  dataTitle_1: string;
  dataTitle_2: StaticImageData;
  dataTitle_3: StaticImageData;
};

const DataTable: DataTableProps[] = [
  {
    dataTitle_1: 'React Expert',
    dataTitle_2: CheckIcon,
    dataTitle_3: UncheckIcon,
  },
  {
    dataTitle_1: 'Perfect Pixel',
    dataTitle_2: CheckIcon,
    dataTitle_3: UncheckIcon,
  },
  {
    dataTitle_1: 'TypeScript Proficiency',
    dataTitle_2: CheckIcon,
    dataTitle_3: UncheckIcon,
  },
  {
    dataTitle_1: 'Clean, Maintainable Code',
    dataTitle_2: CheckIcon,
    dataTitle_3: UncheckIcon,
  },
  {
    dataTitle_1: 'Responsive Website',
    dataTitle_2: CheckIcon,
    dataTitle_3: UncheckIcon,
  },
  {
    dataTitle_1: 'Performance Optimization',
    dataTitle_2: CheckIcon,
    dataTitle_3: UncheckIcon,
  },
  {
    dataTitle_1: 'UI Design Proficiency (Figma)',
    dataTitle_2: CheckIcon,
    dataTitle_3: UncheckIcon,
  },
];

export { HeaderTable, DataTable };
