'use client';

import { cn } from '@/lib/utils';
import { useMemo } from 'react';

interface SparklesCoreProps {
  background?: string;
  particleColor?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
}

export function SparklesCore({
  background = 'transparent',
  particleColor = '#00ffff',
  minSize = 0.6,
  maxSize = 1.2,
  particleDensity = 100,
  className
}: SparklesCoreProps) {
  const sparkles = useMemo(() => {
    return Array.from({ length: particleDensity }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      delay: Math.random() * 5
    }));
  }, [particleDensity, minSize, maxSize]);

  return (
    <div
      className={cn('absolute inset-0 overflow-hidden z-0', className)}
      style={{ background }}
    >
      {sparkles.map((sparkle, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-sm animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}rem`,
            height: `${sparkle.size}rem`,
            backgroundColor: particleColor,
            animationDelay: `${sparkle.delay}s`
          }}
        />
      ))}
    </div>
  );
}
