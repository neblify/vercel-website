'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

interface UseMousePositionOptions {
  throttleMs?: number;
  disabled?: boolean;
}

export function useMousePosition(
  elementRef?: React.RefObject<HTMLElement | null>,
  options: UseMousePositionOptions = {}
) {
  const { throttleMs = 16, disabled = false } = options;

  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0.5,
    normalizedY: 0.5,
  });

  const lastUpdateRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const updatePosition = useCallback(
    (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdateRef.current < throttleMs) return;
      lastUpdateRef.current = now;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        let x = e.clientX;
        let y = e.clientY;
        let width = window.innerWidth;
        let height = window.innerHeight;

        if (elementRef?.current) {
          const rect = elementRef.current.getBoundingClientRect();
          x = e.clientX - rect.left;
          y = e.clientY - rect.top;
          width = rect.width;
          height = rect.height;
        }

        setPosition({
          x,
          y,
          normalizedX: Math.max(0, Math.min(1, x / width)),
          normalizedY: Math.max(0, Math.min(1, y / height)),
        });
      });
    },
    [elementRef, throttleMs]
  );

  useEffect(() => {
    if (disabled) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const target = elementRef?.current || window;
    target.addEventListener('mousemove', updatePosition as EventListener);

    return () => {
      target.removeEventListener('mousemove', updatePosition as EventListener);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [elementRef, updatePosition, disabled]);

  return position;
}

// Hook to check if reduced motion is preferred
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

// Hook to check if device is touch-based
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return isTouch;
}
