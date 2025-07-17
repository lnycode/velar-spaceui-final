'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Tabs({ defaultValue, className, children, ...props }: any) {
  return (
    <TabsPrimitive.Root defaultValue={defaultValue} className={cn("w-full", className)} {...props}>
      {children}
    </TabsPrimitive.Root>
  );
}

export const TabsList = ({ className, ...props }: any) => (
  <TabsPrimitive.List
    className={cn(
      'inline-flex h-12 items-center justify-center rounded-xl bg-zinc-800 p-1 shadow-md backdrop-blur-md border border-zinc-700',
      className
    )}
    {...props}
  />
);

export const TabsTrigger = ({ className, ...props }: any) => (
  <TabsPrimitive.Trigger
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all text-slate-300 hover:text-white hover:bg-zinc-700/60 data-[state=active]:bg-zinc-700 data-[state=active]:text-white',
      className
    )}
    {...props}
  />
);

export const TabsContent = TabsPrimitive.Content;
