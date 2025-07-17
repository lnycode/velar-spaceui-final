'use client';
import React from 'react';

const BotAlert = () => {
  return (
    <div className="p-4 rounded-lg bg-red-900/40 border border-red-500 text-red-200">
      <h2 className="text-lg font-bold">🚨 KI-Warnung</h2>
      <p>Basierend auf deinen Logs und dem aktuellen Wetter besteht ein erhöhtes Migräne-Risiko.</p>
    </div>
  );
};

export default BotAlert;
