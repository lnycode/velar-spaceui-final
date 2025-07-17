'use client';

import Image from 'next/image';
import React from 'react';
const  VelarLogo = () => {
  return (
    <div className="flex justify-center">
      <Image src="/velar-logo.png" alt="Velar Logo" width={120} height={120} />
    </div>
  );
};

export default VelarLogo;
