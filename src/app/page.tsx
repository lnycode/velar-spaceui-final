'use client'


import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import VelarDashboard from '@/components/VelarDashboard'
import { PdfExportButton } from '../components/PdfExportButton'

export default function Page() {
  const [tab, setTab] = useState('forecast')

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">VELAR</h1>

      <Tabs value={tab} onValueChange={setTab} className="w-full max-w-4xl">
        <TabsList>
          <TabsTrigger value="forecast">🌌 Forecast</TabsTrigger>
          <TabsTrigger value="logs">📋 Logs</TabsTrigger>
          <TabsTrigger value="export">📤 Export</TabsTrigger>
        </TabsList>

        <TabsContent value="forecast" activeValue={tab}>
          <VelarDashboard />
        </TabsContent>

        <TabsContent value="logs" activeValue={tab}>
          <div className="p-6 bg-gray-900 rounded-xl">📖 Migräne-Logs coming soon</div>
        </TabsContent>

        <TabsContent value="export" activeValue={tab}>
          <div className="p-6 bg-gray-900 rounded-xl text-center">
            <PdfExportButton />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
