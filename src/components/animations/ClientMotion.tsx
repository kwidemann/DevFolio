'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export const MotionDiv = React.forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  (props, ref) => <motion.div ref={ref} {...props} />
);
export const MotionH1 = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<'h1'>>(
  (props, ref) => <motion.h1 ref={ref} {...props} />
);
export const MotionP = React.forwardRef<HTMLParagraphElement, HTMLMotionProps<'p'>>(
  (props, ref) => <motion.p ref={ref} {...props} />
);
export const MotionArticle = React.forwardRef<HTMLElement, HTMLMotionProps<'article'>>(
  (props, ref) => <motion.article ref={ref} {...props} />
);
export const MotionSpan = React.forwardRef<HTMLSpanElement, HTMLMotionProps<'span'>>(
  (props, ref) => <motion.span ref={ref} {...props} />
);

MotionDiv.displayName = 'MotionDiv';
MotionH1.displayName = 'MotionH1';
MotionP.displayName = 'MotionP';
MotionArticle.displayName = 'MotionArticle';
MotionSpan.displayName = 'MotionSpan';
