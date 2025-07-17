'use client';

import * as React from 'react';

export const Tabs = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">{children}</div>
);

export const TabsList = ({ children }: { children: React.ReactNode }) => (
  <div className="flex space-x-2 border-b pb-2 mb-4">{children}</div>
);

export const TabsTrigger = ({
  children,
  value,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  value: string;
  isActive?: boolean;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-t-md text-sm font-medium ${
      isActive ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'
    }`}
  >
    {children}
  </button>
);

export const TabsContent = ({
  children,
  value,
  activeTab,
}: {
  children: React.ReactNode;
  value: string;
  activeTab: string;
}) => {
  return activeTab === value ? <div>{children}</div> : null;
};

