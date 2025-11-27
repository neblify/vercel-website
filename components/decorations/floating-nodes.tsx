'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useMemo, useEffect, useId } from 'react';
import { cn } from '@/lib/utils';
import { useMousePosition, usePrefersReducedMotion, useIsTouchDevice } from './use-mouse-position';

interface FloatingNodesProps {
  count?: number;
  className?: string;
  interactive?: boolean;
}

interface FloatingNode {
  id: number;
  x: number;
  y: number;
  size: number;
  color: 'primary' | 'accent';
  floatDuration: number;
  floatDelay: number;
  floatAmplitude: number;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateFloatingNodes(count: number, seed: number = 123): FloatingNode[] {
  const nodes: FloatingNode[] = [];
  const sizes = [6, 8, 10, 14, 18];

  for (let i = 0; i < count; i++) {
    const rand1 = seededRandom(seed + i * 4);
    const rand2 = seededRandom(seed + i * 4 + 1);
    const rand3 = seededRandom(seed + i * 4 + 2);
    const rand4 = seededRandom(seed + i * 4 + 3);

    nodes.push({
      id: i,
      x: 5 + rand1 * 90, // Percentage position
      y: 5 + rand2 * 90,
      size: sizes[Math.floor(rand3 * sizes.length)],
      color: rand4 > 0.7 ? 'accent' : 'primary',
      floatDuration: 4 + rand1 * 4, // 4-8 seconds
      floatDelay: rand2 * 2,
      floatAmplitude: 10 + rand3 * 20, // 10-30px
    });
  }

  return nodes;
}

const colors = {
  primary: '#1E88E5',
  accent: '#FDB515',
};

function FloatingNodeElement({
  node,
  mouseX,
  mouseY,
  interactive,
  prefersReducedMotion,
  glowFilterId,
}: {
  node: FloatingNode;
  mouseX: number;
  mouseY: number;
  interactive: boolean;
  prefersReducedMotion: boolean;
  glowFilterId: string;
}) {
  // Calculate distance from mouse to node
  const dx = mouseX - node.x;
  const dy = mouseY - node.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Repulsion effect - nodes move away from cursor
  const repulsionStrength = interactive && !prefersReducedMotion ? Math.max(0, 1 - distance / 30) * 15 : 0;
  const angle = Math.atan2(dy, dx);
  const repelX = -Math.cos(angle) * repulsionStrength;
  const repelY = -Math.sin(angle) * repulsionStrength;

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useSpring(repelX, springConfig);
  const y = useSpring(repelY, springConfig);

  useEffect(() => {
    x.set(repelX);
    y.set(repelY);
  }, [repelX, repelY, x, y]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        x,
        y,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: node.color === 'accent' ? 0.9 : 0.6,
        y: prefersReducedMotion
          ? 0
          : [0, -node.floatAmplitude, 0, node.floatAmplitude * 0.5, 0],
      }}
      transition={{
        scale: { duration: 0.5, delay: node.floatDelay * 0.3 },
        opacity: { duration: 0.5, delay: node.floatDelay * 0.3 },
        y: {
          duration: node.floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: node.floatDelay,
        },
      }}
    >
      <svg
        width={node.size * 2}
        height={node.size * 2}
        viewBox="0 0 40 40"
        style={{ marginLeft: -node.size, marginTop: -node.size }}
      >
        <defs>
          <filter id={`${glowFilterId}-${node.id}`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id={`grad-${glowFilterId}-${node.id}`}>
            <stop offset="0%" stopColor={colors[node.color]} stopOpacity="1" />
            <stop offset="70%" stopColor={colors[node.color]} stopOpacity="0.5" />
            <stop offset="100%" stopColor={colors[node.color]} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          cx="20"
          cy="20"
          r="12"
          fill={`url(#grad-${glowFilterId}-${node.id})`}
          filter={`url(#${glowFilterId}-${node.id})`}
        />
        <circle cx="20" cy="20" r="4" fill={colors[node.color]} />
      </svg>
    </motion.div>
  );
}

export function FloatingNodes({
  count = 12,
  className,
  interactive = true,
}: FloatingNodesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isTouchDevice = useIsTouchDevice();

  const mousePosition = useMousePosition(containerRef, {
    disabled: !interactive || prefersReducedMotion || isTouchDevice,
  });

  const nodes = useMemo(() => generateFloatingNodes(count), [count]);

  // Convert mouse position to percentage for comparison with node positions
  const mouseXPercent = mousePosition.normalizedX * 100;
  const mouseYPercent = mousePosition.normalizedY * 100;

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
    >
      {nodes.map((node) => (
        <FloatingNodeElement
          key={node.id}
          node={node}
          mouseX={mouseXPercent}
          mouseY={mouseYPercent}
          interactive={interactive && !isTouchDevice}
          prefersReducedMotion={prefersReducedMotion}
          glowFilterId={uniqueId}
        />
      ))}
    </div>
  );
}
