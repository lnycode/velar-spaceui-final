'use client'

import { useState } from 'react'
import { SparklesCore } from '@/components/ui/sparkles'
import VelarLogo from '@/components/VelarLogo'
import BotAlert from '@/components/BotAlert'
import ForecastTab from '@/components/ForecastTab'
import LogsTab from '@/components/LogsTab'
import ExportTab from '@/components/ExportTab'
import Tabs from '@/components/Tabs'
import Image from 'next/image'
import clsx from 'clsx'

export default function Page() {
  const [activeTab, setActiveTab] = useState('home')

  const renderTab = () => {
    switch (activeTab) {
      case 'forecast':
        return <ForecastTab />
      case 'logs':
        return <LogsTab />
      case 'export':
        return <ExportTab />
      case 'home':
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full px-4 text-center space-y-8">
            <VelarLogo className="w-32 h-32 md:w-48 md:h-48" />
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
              Welcome to <span className="text-cyan-300">VELAR</span>
            </h1>
            <p className="max-w-xl text-white/80 text-lg md:text-xl">
              Explore predictions, logs, and export insights in a stellar space UI.
            </p>
          </div>
        )
    }
  }

  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden bg-black text-white">
      {/* Background Sparkles */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00ffff"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-md shadow-md border-b border-white/10">
        <div className="flex items-center space-x-3">
          <Image src="/icons/logo-v.png" alt="Velar Logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-wide text-white">VELAR</span>
        </div>
        <BotAlert />
      </header>

      {/* Tabs */}
      <Tabs activeTab={activeTab} onChange={setActiveTab} />

      {/* Main Content */}
      <section className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        {renderTab()}
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center text-white/40 text-sm">
        © 2025 Velar AI. Space Forecast System.
      </footer>
    </main>
  )
}
