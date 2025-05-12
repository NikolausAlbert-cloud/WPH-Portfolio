"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useAnimate,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import React, { useEffect, useRef } from 'react';

type NumberMotionProps = {
  num?: number;
}

export const NumberMotion: React.FC<NumberMotionProps> = ({ num }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
  });

  const [_, animate] = useAnimate();
  const startingValue = useMotionValue(0);

  const current = useTransform(
    startingValue,
    (value) => Math.round(value).toLocaleString() + ' %'
  );

  useEffect(() => {
    if (isInView) {
      animate(startingValue, num, {
        duration: 7,
        ease: 'circIn',
      });
    }
  }, [animate, isInView, num, startingValue]);

  return (
    <LazyMotion features={domAnimation}>
      <m.p ref={ref}>{current}</m.p>
    </LazyMotion>
  );
}