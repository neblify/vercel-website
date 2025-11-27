'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useId } from 'react';
import { cn } from '@/lib/utils';
import { usePrefersReducedMotion } from './use-mouse-position';

interface GradientBlobProps {
  variant?: 'large' | 'medium' | 'small';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  colorScheme?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const sizeMap = {
  large: { width: 600, height: 600, blur: 80 },
  medium: { width: 400, height: 400, blur: 60 },
  small: { width: 250, height: 250, blur: 40 },
};

const positionMap = {
  'top-left': '-top-48 -left-48',
  'top-right': '-top-48 -right-48',
  'bottom-left': '-bottom-48 -left-48',
  'bottom-right': '-bottom-48 -right-48',
  'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
};

const colorSchemes = {
  primary: {
    start: '#1E88E5',
    end: '#0D47A1',
  },
  secondary: {
    start: '#0D47A1',
    end: '#1E88E5',
  },
  accent: {
    start: '#FDB515',
    end: '#1E88E5',
  },
};

export function GradientBlob({
  variant = 'medium',
  position = 'top-right',
  colorScheme = 'primary',
  className,
}: GradientBlobProps) {
  const ref = useRef<HTMLDivElement>(null);
  const uniqueId = useId();
  const prefersReducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const smoothScale = useSpring(scale, { stiffness: 50, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.1, 0.25, 0.25, 0.1]);

  const { width, height, blur } = sizeMap[variant];
  const colors = colorSchemes[colorScheme];
  const filterId = `blur-${uniqueId}`;
  const gradientId = `gradient-${uniqueId}`;

  return (
    <motion.div
      ref={ref}
      className={cn(
        'absolute pointer-events-none',
        positionMap[position],
        className
      )}
      style={{
        scale: prefersReducedMotion ? 1 : smoothScale,
        opacity: prefersReducedMotion ? 0.2 : opacity,
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 200"
        className="w-full h-full"
      >
        <defs>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation={blur / 10} />
          </filter>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.start} stopOpacity="0.6" />
            <stop offset="100%" stopColor={colors.end} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <motion.ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="70"
          fill={`url(#${gradientId})`}
          filter={`url(#${filterId})`}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  rx: [80, 85, 75, 82, 80],
                  ry: [70, 75, 80, 72, 70],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </motion.div>
  );
}
