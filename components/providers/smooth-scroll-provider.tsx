'use client';

import { ReactNode } from 'react';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

// Lenis smooth scroll temporarily disabled due to conflict with Framer Motion animations
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return <>{children}</>;
}
