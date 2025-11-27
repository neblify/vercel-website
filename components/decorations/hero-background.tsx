'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { GradientBlob } from './gradient-blob';
import { CircuitNetwork } from './circuit-network';
import { FloatingNodes } from './floating-nodes';

interface HeroBackgroundProps {
  variant?: 'home' | 'about' | 'solutions' | 'contact' | 'default';
  className?: string;
  children?: ReactNode;
}

export function HeroBackground({
  variant = 'default',
  className,
  children,
}: HeroBackgroundProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Background Decorations Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Home variant - full tech showcase */}
        {variant === 'home' && (
          <>
            <GradientBlob variant="large" position="top-right" colorScheme="primary" />
            <GradientBlob variant="medium" position="bottom-left" colorScheme="secondary" />
            <CircuitNetwork nodeCount={25} interactive className="opacity-30" />
          </>
        )}

        {/* About variant - softer, more approachable */}
        {variant === 'about' && (
          <>
            <GradientBlob variant="large" position="top-right" colorScheme="primary" />
            <GradientBlob variant="small" position="bottom-left" colorScheme="accent" />
            <CircuitNetwork nodeCount={15} interactive className="opacity-20" />
          </>
        )}

        {/* Solutions variant - tech-heavy */}
        {variant === 'solutions' && (
          <>
            <GradientBlob variant="medium" position="top-right" colorScheme="primary" />
            <GradientBlob variant="medium" position="bottom-left" colorScheme="secondary" />
            <CircuitNetwork nodeCount={30} interactive className="opacity-35" colorScheme="primary" />
          </>
        )}

        {/* Contact variant - welcoming, minimal */}
        {variant === 'contact' && (
          <>
            <GradientBlob variant="large" position="top-right" colorScheme="primary" />
            <GradientBlob variant="small" position="bottom-left" colorScheme="accent" />
          </>
        )}

        {/* Default variant - balanced */}
        {variant === 'default' && (
          <>
            <GradientBlob variant="medium" position="top-right" colorScheme="primary" />
            <GradientBlob variant="small" position="bottom-left" colorScheme="secondary" />
            <CircuitNetwork nodeCount={18} interactive className="opacity-25" />
          </>
        )}
      </div>

      {/* Content Layer */}
      {children}

      {/* Floating Nodes Layer - above content for depth */}
      {(variant === 'home' || variant === 'solutions') && (
        <FloatingNodes
          count={variant === 'home' ? 12 : 8}
          interactive
          className="z-5"
        />
      )}
    </div>
  );
}

// Simpler version for section backgrounds
interface SectionBackgroundProps {
  variant?: 'light' | 'tech' | 'minimal';
  className?: string;
  children?: ReactNode;
}

export function SectionBackground({
  variant = 'minimal',
  className,
  children,
}: SectionBackgroundProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {variant === 'light' && (
          <>
            <GradientBlob variant="small" position="top-right" colorScheme="primary" className="opacity-50" />
          </>
        )}

        {variant === 'tech' && (
          <>
            <CircuitNetwork nodeCount={12} interactive={false} className="opacity-15" />
          </>
        )}

        {variant === 'minimal' && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        )}
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
