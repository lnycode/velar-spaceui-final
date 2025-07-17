"use client";

import { useEffect, useState } from "react";
import StarsBackground from "@/components/StarsBackground";
import BotAlert from "@/components/BotAlert";
import LogsTab from "@/components/LogsTab";
import ForecastTab from "@/components/ForecastTab";
import ExportTab from "@/components/ExportTab";
import VelarLogo from "@/components/VelarLogo";
import TabSwitcher from "@/components/TabSwitcher";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("forecast");

  useEffect(() => {
    document.title = "Velar – Migräne KI Tracker";
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      <StarsBackground />

      <header className="z-10 w-full max-w-4xl py-6 px-4 flex items-center justify-between">
        <VelarLogo />
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>

      <section className="z-10 w-full max-w-3xl px-4 py-6 space-y-4">
        <BotAlert />

        {activeTab === "forecast" && <ForecastTab />}
        {activeTab === "logs" && <LogsTab />}
        {activeTab === "export" && <ExportTab />}
      </section>

      <footer className="z-10 text-center py-6 text-sm text-gray-500">
        © 2025 Velar. All rights reserved.
      </footer>
    </main>
  );
}
