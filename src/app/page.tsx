"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import VelarDashboard from "@/components/VelarDashboard";
import PdfExportButton from "@/components/PdfExportButton";
import LogsPanel from "@/components/LogsPanel";
import BotAlert from "@/components/BotAlert";

export default function Page() {
  const [tab, setTab] = useState("forecast");

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a14] to-[#050509] text-white font-sans overflow-x-hidden">
      {/* Kosmischer Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -top-10 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      <section className="sticky top-0 z-20 bg-black/80 backdrop-blur-lg border-b border-zinc-800 shadow-sm px-4 py-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-cyan-300 tracking-wide">
          VELAR
        </h1>
        <p className="text-center text-sm text-slate-400">Dein Space-Migräne Companion · 2025 ready</p>
      </section>

      <div className="px-4 py-6 max-w-5xl mx-auto w-full">
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="flex justify-center flex-wrap sticky top-[65px] z-10 bg-black/70 backdrop-blur-md py-2 rounded-xl mb-6 gap-2">
            <TabsTrigger value="forecast">🌌 Forecast</TabsTrigger>
            <TabsTrigger value="logs">📋 Logs</TabsTrigger>
            <TabsTrigger value="export">📤 Export</TabsTrigger>
            <TabsTrigger value="alerts">🤖 KI-Warnung</TabsTrigger>
          </TabsList>

          <TabsContent value="forecast" activeValue={tab}>
            <VelarDashboard />
          </TabsContent>

          <TabsContent value="logs" activeValue={tab}>
            <LogsPanel />
          </TabsContent>

          <TabsContent value="export" activeValue={tab}>
            <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
              <PdfExportButton />
            </div>
          </TabsContent>

          <TabsContent value="alerts" activeValue={tab}>
            <BotAlert />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

