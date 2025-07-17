'use client'

import { useEffect, useState } from 'react'

type LogEntry = {
  date: string
  intensity: number
  notes?: string
}

const dummyLogs: LogEntry[] = [
  { date: '2025-07-15', intensity: 7, notes: 'Wetterumschwung, Stress' },
  { date: '2025-07-16', intensity: 5, notes: 'Schlafmangel' },
  { date: '2025-07-17', intensity: 2, notes: 'Guter Tag' },
]

export default function LogsPanel() {
  const [logs, setLogs] = useState<LogEntry[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('velar-logs')
    if (stored) {
      setLogs(JSON.parse(stored))
    } else {
      localStorage.setItem('velar-logs', JSON.stringify(dummyLogs))
      setLogs(dummyLogs)
    }
  }, [])

  return (
    <div className="bg-zinc-900 rounded-xl p-6 shadow-lg space-y-4">
      <h2 className="text-xl font-bold text-cyan-300">Migräne-Logbuch</h2>
      {logs.map((log, i) => (
        <div
          key={i}
          className="bg-zinc-800 p-4 rounded-lg flex justify-between items-center"
        >
          <div>
            <div className="font-semibold text-white">{log.date}</div>
            <div className="text-sm text-zinc-400">{log.notes}</div>
          </div>
          <div className="text-pink-400 font-bold text-lg">
            {log.intensity}/10
          </div>
        </div>
      ))}
    </div>
  )
}
