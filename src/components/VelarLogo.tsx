'use client';

import Image from 'next/image';

export default function VelarLogo() {
  return (
    <div className="w-full flex justify-center py-4 animate-fade-in">
      <Image
        src="/velar-logo.png" // Beispielname, bitte sicherstellen
        alt="Velar Logo"
        width={120}
        height={120}
        className="rounded-full drop-shadow-lg"
        priority
      />
    </div>
  );
}
