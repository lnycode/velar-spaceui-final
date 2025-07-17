'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import VelarDashboard from '@/components/VelarDashboard'
import { PdfExportButton } from '@/components/PdfExportButton'

export default function Page() {
  const [tab, setTab] = useState('forecast')

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-widest drop-shadow-lg">
        🌌 VELAR
      </h1>

      <Tabs value={tab} onValueChange={setTab} className="w-full max-w-4xl">
        <TabsList>
          <TabsTrigger value="forecast">🌠 Forecast</TabsTrigger>
          <TabsTrigger value="logs">📋 Logs</TabsTrigger>
          <TabsTrigger value="export">📤 Export</TabsTrigger>
        </TabsList>

        <TabsContent value="forecast" activeValue={tab}>
          <VelarDashboard />
        </TabsContent>

        <TabsContent value="logs" activeValue={tab}>
          <div className="p-6 bg-zinc-900 rounded-xl shadow-inner text-zinc-300">
            📖 Migräne-Logs kommen bald. ✨
          </div>
        </TabsContent>

        <TabsContent value="export" activeValue={tab}>
          <div className="p-6 bg-zinc-900 rounded-xl shadow-inner text-center text-zinc-300 space-y-4">
            <p>Exportiere deinen Migränebericht als PDF</p>
            <PdfExportButton />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
