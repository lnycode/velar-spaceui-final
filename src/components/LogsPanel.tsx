"use client";

import React from "react";

const dummyLogs = [
  { date: "2025-07-17", intensity: "hoch", trigger: "Stress" },
  { date: "2025-07-16", intensity: "mittel", trigger: "Wetterumschwung" },
  { date: "2025-07-14", intensity: "niedrig", trigger: "Bildschirmzeit" },
];

export function LogsPanel() {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-cyan-400">Migräne-Logs</h2>
      <ul className="space-y-2">
        {dummyLogs.map((log, index) => (
          <li
            key={index}
            className="flex justify-between bg-zinc-800 rounded-lg px-4 py-2 text-sm text-slate-200"
          >
            <span>{log.date}</span>
            <span>{log.intensity}</span>
            <span>{log.trigger}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
