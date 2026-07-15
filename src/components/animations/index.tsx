'use client';

import { motion, HTMLMotionProps, useScroll, useTransform } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, delay = 0, duration = 0.6, y = 20, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

FadeIn.displayName = 'FadeIn';

interface SlideUpProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export const SlideUp = forwardRef<HTMLDivElement, SlideUpProps>(
  ({ children, delay = 0, duration = 0.6, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.175, 0.885, 0.32, 1.275] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

SlideUp.displayName = 'SlideUp';

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
}

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ children, stagger = 0.1, delayChildren = 0, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

StaggerContainer.displayName = 'StaggerContainer';

interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
}

export const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ children, delay = 0, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay, ease: 'easeOut' },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

StaggerItem.displayName = 'StaggerItem';

interface ScaleInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export const ScaleIn = forwardRef<HTMLDivElement, ScaleInProps>(
  ({ children, delay = 0, duration = 0.4, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

ScaleIn.displayName = 'ScaleIn';

export function ScrollReveal({
  children,
  className,
  once = true,
  margin = '-100px',
  ...props
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
  margin?: string;
} & Omit<HTMLMotionProps<'div'>, 'children' | 'variants' | 'initial' | 'animate' | 'viewport'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({
  children,
  speed = 0.5,
  className,
  ...props
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
} & Omit<HTMLMotionProps<'div'>, 'children'>) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return (
    <motion.div
      style={{ y }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({
  children,
  className,
  delay = 0,
  ...props
}: {
  children: string;
  className?: string;
  delay?: number;
} & Omit<HTMLMotionProps<'span'>, 'children'>) {
  const words = children.split(' ');

  return (
    <motion.span className={`inline-flex gap-1 ${className}`} {...props}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.05, ease: 'easeOut' }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function LetterReveal({
  children,
  className,
  delay = 0,
  ...props
}: {
  children: string;
  className?: string;
  delay?: number;
} & Omit<HTMLMotionProps<'span'>, 'children'>) {
  const letters = children.split('');

  return (
    <motion.span className={`inline-flex ${className}`} {...props}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: delay + i * 0.02, ease: 'easeOut' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}