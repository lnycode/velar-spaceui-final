'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type TabsProps = {
  value: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
};

export default function Tabs({ value, onValueChange, className, children }: TabsProps) {
  return (
    <div className={cn('w-full', className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { activeValue: value, onChange: onValueChange })
          : child
      )}
    </div>
  );
}

type TabsListProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TabsList({ children, className }: TabsListProps) {
  return (
    <div className={cn('flex gap-2 bg-zinc-800 p-2 rounded-xl', className)}>
      {children}
    </div>
  );
}

type TabsTriggerProps = {
  value: string;
  activeValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
};

export default function TabsTrigger({ value, activeValue, onChange, children }: TabsTriggerProps) {
  const isActive = value === activeValue;

  return (
    <button
      onClick={() => onChange?.(value)}
      className={cn(
        'px-4 py-2 rounded-lg transition',
        isActive ? 'bg-pink-600 text-white' : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
      )}
    >
      {children}
    </button>
  );
}

type TabsContentProps = {
  value: string;
  activeValue?: string;
  children: React.ReactNode;
};

export default function TabsContent({ value, activeValue, children }: TabsContentProps) {
  if (value !== activeValue) return null;
  return <div className="mt-4">{children}</div>;
}
