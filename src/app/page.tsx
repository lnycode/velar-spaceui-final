"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { VelarDashboard } from "@/components/VelarDashboard";
import { PdfExportButton } from "@/components/PdfExportButton";
import { LogsPanel } from "@/components/LogsPanel";
import { BotAlert } from "@/components/BotAlert";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0c0c1c] to-[#050509] text-white font-sans px-6 py-12 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-ping"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-xl animate-fade-in-up">
          VELAR
        </h1>
        <p className="text-center text-slate-400 mt-2 text-md italic animate-fade-in-up delay-150">
          Dein Space-Migräne Companion
        </p>

        <div className="mt-10 animate-fade-in-up delay-300">
          <Tabs defaultValue="forecast" className="w-full">
            <TabsList className="bg-black/40 backdrop-blur-md rounded-xl p-1 flex justify-center gap-2 flex-wrap border border-white/10 shadow-md">
              <TabsTrigger value="forecast" className="tab-button">
                🧠 Forecast
              </TabsTrigger>
              <TabsTrigger value="logs" className="tab-button">
                📒 Logs
              </TabsTrigger>
              <TabsTrigger value="export" className="tab-button">
                📄 Export
              </TabsTrigger>
              <TabsTrigger value="alerts" className="tab-button">
                ⚠️ KI-Warnung
              </TabsTrigger>
            </TabsList>

            <div className="mt-8 space-y-6">
              <TabsContent value="forecast">
                <VelarDashboard />
              </TabsContent>
              <TabsContent value="logs">
                <LogsPanel />
              </TabsContent>
              <TabsContent value="export">
                <PdfExportButton />
              </TabsContent>
              <TabsContent value="alerts">
                <BotAlert />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      <style jsx global>{`
        .tab-button {
          @apply text-sm px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white transition-all duration-300 shadow-sm;
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </main>
  );
}
