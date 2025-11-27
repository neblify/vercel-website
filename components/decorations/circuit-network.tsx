'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useMemo, useEffect, useId } from 'react';
import { cn } from '@/lib/utils';
import { useMousePosition, usePrefersReducedMotion, useIsTouchDevice } from './use-mouse-position';

interface CircuitNetworkProps {
  nodeCount?: number;
  interactive?: boolean;
  className?: string;
  colorScheme?: 'primary' | 'secondary' | 'accent';
}

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  isAccent: boolean;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
}

// Seeded random for consistent node positions
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateNodes(count: number, seed: number = 42): Node[] {
  const nodes: Node[] = [];
  const sizes = [4, 6, 8, 10];

  for (let i = 0; i < count; i++) {
    const rand1 = seededRandom(seed + i * 3);
    const rand2 = seededRandom(seed + i * 3 + 1);
    const rand3 = seededRandom(seed + i * 3 + 2);

    nodes.push({
      id: i,
      x: 50 + rand1 * 700, // Keep within viewBox with margins
      y: 50 + rand2 * 500,
      size: sizes[Math.floor(rand3 * sizes.length)],
      isAccent: rand3 > 0.85, // 15% chance of accent color
    });
  }

  return nodes;
}

function generateConnections(nodes: Node[], maxDistance: number = 180): Connection[] {
  const connections: Connection[] = [];

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        connections.push({
          from: i,
          to: j,
          opacity: Math.max(0.1, 1 - distance / maxDistance) * 0.3,
        });
      }
    }
  }

  return connections;
}

const colorSchemes = {
  primary: {
    node: '#1E88E5',
    accent: '#FDB515',
    line: '#1E88E5',
  },
  secondary: {
    node: '#0D47A1',
    accent: '#FDB515',
    line: '#0D47A1',
  },
  accent: {
    node: '#FDB515',
    accent: '#1E88E5',
    line: '#FDB515',
  },
};

export function CircuitNetwork({
  nodeCount = 20,
  interactive = true,
  className,
  colorScheme = 'primary',
}: CircuitNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isTouchDevice = useIsTouchDevice();
  const mousePosition = useMousePosition(containerRef, {
    disabled: !interactive || prefersReducedMotion || isTouchDevice,
  });

  const colors = colorSchemes[colorScheme];

  const { nodes, connections } = useMemo(() => {
    const nodes = generateNodes(nodeCount);
    const connections = generateConnections(nodes);
    return { nodes, connections };
  }, [nodeCount]);

  // Mouse-based parallax offset
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 20 };
  const offsetX = useSpring(mouseX, springConfig);
  const offsetY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!interactive || prefersReducedMotion || isTouchDevice) return;

    // Convert normalized mouse position to offset
    const xOffset = (mousePosition.normalizedX - 0.5) * 30;
    const yOffset = (mousePosition.normalizedY - 0.5) * 30;
    mouseX.set(xOffset);
    mouseY.set(yOffset);
  }, [mousePosition, interactive, prefersReducedMotion, isTouchDevice, mouseX, mouseY]);

  const glowFilterId = `glow-${uniqueId}`;

  return (
    <div ref={containerRef} className={cn('absolute inset-0 overflow-hidden', className)}>
      <motion.svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        style={{
          x: offsetX,
          y: offsetY,
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id={glowFilterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        <g className="connections">
          {connections.map((conn, index) => {
            const fromNode = nodes[conn.from];
            const toNode = nodes[conn.to];
            return (
              <motion.line
                key={`conn-${index}`}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={colors.line}
                strokeWidth={1}
                strokeOpacity={conn.opacity}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: conn.opacity }}
                transition={{ duration: 1.5, delay: index * 0.02 }}
              />
            );
          })}
        </g>

        {/* Nodes */}
        <g className="nodes">
          {nodes.map((node, index) => (
            <motion.circle
              key={`node-${node.id}`}
              cx={node.x}
              cy={node.y}
              r={node.size / 2}
              fill={node.isAccent ? colors.accent : colors.node}
              filter={node.size >= 8 ? `url(#${glowFilterId})` : undefined}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: node.isAccent ? 0.9 : 0.7,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.03,
              }}
              whileHover={
                interactive && !prefersReducedMotion
                  ? {
                      scale: 1.5,
                      opacity: 1,
                    }
                  : undefined
              }
            />
          ))}
        </g>

        {/* Animated pulse rings on larger nodes */}
        {!prefersReducedMotion && (
          <g className="pulse-rings">
            {nodes
              .filter((n) => n.size >= 8)
              .map((node) => (
                <motion.circle
                  key={`pulse-${node.id}`}
                  cx={node.x}
                  cy={node.y}
                  r={node.size / 2}
                  fill="none"
                  stroke={node.isAccent ? colors.accent : colors.node}
                  strokeWidth={1}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: node.id * 0.3,
                    ease: 'easeOut',
                  }}
                />
              ))}
          </g>
        )}
      </motion.svg>
    </div>
  );
}
