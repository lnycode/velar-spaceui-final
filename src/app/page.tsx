'use client';

import { useState } from 'react';
import ForecastTab from '@/components/ForecastTab';
import LogsTab from '@/components/LogsTab';
import ExportTab from '@/components/ExportTab';
import { Tabs } from '@/components/Tabs';
import SparklesCore from '@/components/SparklesCore';
import VelarLogo from '@/components/VelarLogo';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'forecast' | 'logs' | 'export'>('forecast');

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SparklesCore />
      </div>

      <header className="flex items-center justify-between p-4 sticky top-0 bg-black/70 backdrop-blur-md z-50">
        <VelarLogo />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>

      <main className="p-4">
        {activeTab === 'forecast' && <ForecastTab />}
        {activeTab === 'logs' && <LogsTab />}
        {activeTab === 'export' && <ExportTab />}
      </main>
    </div>
  );
}
