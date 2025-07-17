'use client';

import { useState, useEffect } from 'react';

export default function LogsTab() {
  const [logs, setLogs] = useState<string[]>([]);
  const [entry, setEntry] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('velar_logs');
    if (stored) setLogs(JSON.parse(stored));
  }, []);

  const addLog = () => {
    const updated = [...logs, `${new Date().toLocaleString()}: ${entry}`];
    setLogs(updated);
    localStorage.setItem('velar_logs', JSON.stringify(updated));
    setEntry('');
  };

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-semibold text-cyan-300">Migräne-Attacken protokollieren</h2>

      <input
        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder:text-slate-500"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Was ist passiert?"
      />
      <button
        onClick={addLog}
        className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition"
      >
        Eintragen
      </button>

      <div className="text-left max-h-40 overflow-y-auto border-t pt-4 border-zinc-700">
        {logs.map((log, idx) => (
          <p key={idx} className="text-sm text-slate-400">{log}</p>
        ))}
      </div>
    </div>
  );
}
