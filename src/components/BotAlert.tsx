"use client";

import React from "react";

export function BotAlert() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-cyan-900 p-6 rounded-xl shadow-lg space-y-3 border border-cyan-800">
      <h2 className="text-xl font-semibold text-pink-400">🤖 KI-Warnung</h2>
      <p className="text-sm text-slate-200">
        Basierend auf deinen Logs sind die nächsten 48h ein Risikofenster für eine Migräne-Episode. 🧠
      </p>
      <p className="text-sm text-cyan-300">Empfehlung: Trinke genug Wasser und meide Stressoren.</p>
    </div>
  );
}
