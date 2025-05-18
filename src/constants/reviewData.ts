import { StaticImageData } from 'next/image';

import Person1_Picture from '../../public/reviewer/person1.svg';
import Person2_Picture from '../../public/reviewer/person2.svg';
import Person3_Picture from '../../public/reviewer/person3.svg';

type ReviewDataProps = {
  src: StaticImageData;
  name: string;
  position: string;
  review: string;
};

export const reviewData: ReviewDataProps[] = [
  {
    src: Person1_Picture,
    name: 'John Doe',
    position: 'Software Engineer',
    review:
      'Collaborating with Nikolaus has been an incredible experience. The platform is top-notch and has significantly enhanced my productivity.',
  },
  {
    src: Person2_Picture,
    name: 'Jane Smith',
    position: 'Product Manager',
    review:
      'Working with Nikolaus has been a pleasure. The attention to detail and user-centric approach is truly commendable.',
  },
  {
    src: Person3_Picture,
    name: 'Alice Johnson',
    position: 'UI/UX Designer',
    review:
      "Nikolaus's collaboration has been invaluable. The tools and insights provided have elevated our design process to new heights.",
  },
];
