'use client';

import { useState } from 'react';
import clsx from 'clsx';

interface Tab {
  name: string;
  label: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const TabSwitcher = ({ tabs, activeTab, onTabChange, className }: TabSwitcherProps) => {
  return (
    <div className={clsx('flex space-x-2 justify-center mt-4', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => onTabChange(tab.name)}
          className={clsx(
            'px-4 py-2 rounded transition duration-300 font-medium text-sm',
            activeTab === tab.name
              ? 'bg-cyan-500 text-white shadow'
              : 'bg-white text-cyan-600 border border-cyan-500 hover:bg-cyan-50'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
