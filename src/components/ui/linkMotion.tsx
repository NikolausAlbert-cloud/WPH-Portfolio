// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import React from 'react';

// import { cn } from '@/lib/utils';

// type MotionLinkProps = {
//   children: React.ReactNode;
//   href: string;
//   // variants: any;
//   // whileHover?: string;
//   scale?: number;
//   className?: string;
// };

// const MotionLink = motion.create(Link);

// const LinkMotion: React.FC<MotionLinkProps> = ({ 
//   children, 
//   href, 
//   // variants, 
//   // whileHover,
//   scale = 1.6,
//   className, 
//   ...motionProps 
// }) => {
//   const Comp = MotionLink;
//   return (
//     <Comp 
//       href={href} 
//       // variants={variants} 
//       // whileHover={whileHover}
//       whileHover={{ scale }}
//       className={cn(className)}
//       {...motionProps}  
//     >
//       {children}
//     </Comp>
//   ) 
   
// };

// export default LinkMotion;
