'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePrefersReducedMotion } from './use-mouse-position';

interface SectionDividerProps {
  variant?: 'wave' | 'circuit' | 'dots' | 'gradient';
  flip?: boolean;
  className?: string;
  colorScheme?: 'primary' | 'secondary' | 'muted';
}

const colorSchemes = {
  primary: {
    fill: '#1E88E5',
    stroke: '#1E88E5',
  },
  secondary: {
    fill: '#0D47A1',
    stroke: '#0D47A1',
  },
  muted: {
    fill: '#E8EEF4',
    stroke: '#CBD5E1',
  },
};

function WaveDivider({ colors, flip }: { colors: typeof colorSchemes.primary; flip: boolean }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={cn('w-full h-16 md:h-24', flip && 'rotate-180')}
    >
      <path
        d="M0,0 C300,100 900,20 1200,80 L1200,120 L0,120 Z"
        fill={colors.fill}
        fillOpacity="0.05"
      />
      <path
        d="M0,20 C400,80 800,40 1200,60"
        fill="none"
        stroke={colors.stroke}
        strokeWidth="1"
        strokeOpacity="0.2"
      />
    </svg>
  );
}

function CircuitDivider({
  colors,
  prefersReducedMotion,
}: {
  colors: typeof colorSchemes.primary;
  prefersReducedMotion: boolean;
}) {
  const nodes = [
    { x: 100, y: 30 },
    { x: 300, y: 60 },
    { x: 500, y: 25 },
    { x: 700, y: 55 },
    { x: 900, y: 35 },
    { x: 1100, y: 50 },
  ];

  return (
    <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-12 md:h-20">
      {/* Connection lines */}
      <motion.path
        d={`M0,40 ${nodes.map((n) => `L${n.x},${n.y}`).join(' ')} L1200,40`}
        fill="none"
        stroke={colors.stroke}
        strokeWidth="1"
        strokeOpacity="0.3"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="6"
            fill={colors.fill}
            fillOpacity="0.2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="3"
            fill={colors.fill}
            fillOpacity="0.6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          />
          {!prefersReducedMotion && (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="none"
              stroke={colors.stroke}
              strokeWidth="1"
              strokeOpacity="0.4"
              initial={{ scale: 1, opacity: 0.4 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          )}
        </motion.g>
      ))}
    </svg>
  );
}

function DotsDivider({ colors }: { colors: typeof colorSchemes.primary }) {
  const dots = Array.from({ length: 20 }, (_, i) => ({
    x: 30 + i * 60,
    y: 20 + Math.sin(i * 0.5) * 10,
    size: 2 + (i % 3),
  }));

  return (
    <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-10">
      {dots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={dot.size}
          fill={colors.fill}
          fillOpacity={0.2 + (dot.size / 5) * 0.3}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.03 }}
        />
      ))}
    </svg>
  );
}

function GradientDivider({ colors, flip }: { colors: typeof colorSchemes.primary; flip: boolean }) {
  return (
    <div
      className={cn(
        'w-full h-px',
        flip ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
      )}
      style={{
        backgroundImage: `linear-gradient(${flip ? 'to left' : 'to right'}, transparent, ${colors.fill}40, transparent)`,
      }}
    />
  );
}

export function SectionDivider({
  variant = 'wave',
  flip = false,
  className,
  colorScheme = 'primary',
}: SectionDividerProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const colors = colorSchemes[colorScheme];

  return (
    <div className={cn('w-full overflow-hidden', className)}>
      {variant === 'wave' && <WaveDivider colors={colors} flip={flip} />}
      {variant === 'circuit' && (
        <CircuitDivider colors={colors} prefersReducedMotion={prefersReducedMotion} />
      )}
      {variant === 'dots' && <DotsDivider colors={colors} />}
      {variant === 'gradient' && <GradientDivider colors={colors} flip={flip} />}
    </div>
  );
}
