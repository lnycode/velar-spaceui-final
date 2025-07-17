'use client';
import React from 'react';

const LogsPanel = () => {
  const dummyLogs = [
    { date: '2025-07-17', note: 'Leichte Migräne – Wetterumschwung' },
    { date: '2025-07-16', note: 'Keine Beschwerden' },
    { date: '2025-07-15', note: 'Starke Migräne am Nachmittag' }
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Deine Logs</h2>
      <ul className="list-disc list-inside">
        {dummyLogs.map((log, i) => (
          <li key={i}>
            <strong>{log.date}:</strong> {log.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogsPanel;
