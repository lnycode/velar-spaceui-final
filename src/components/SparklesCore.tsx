'use client';

import React from 'react';

export default function SparklesCore({ background, minSize, maxSize, particleDensity, particleColor }: any) {
  return (
    <canvas className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" style={{ background }} />
  );
}
