'use client'

import { useEffect, useState } from 'react'

export default function BotAlert() {
  const [alert, setAlert] = useState<string | null>(null)

  useEffect(() => {
    // Simulierter KI-Alert basierend auf Dummy-Logs
    const logsRaw = localStorage.getItem('velar-logs')
    if (logsRaw) {
      const logs = JSON.parse(logsRaw)
      const highDays = logs.filter((l: any) => l.intensity >= 6)
      if (highDays.length >= 2) {
        setAlert('⚠️ KI-Hinweis: Häufung starker Migräne – mögliche Wetterfront oder Stressphase.')
      } else {
        setAlert('✅ Keine akuten Warnungen basierend auf den letzten Tagen.')
      }
    }
  }, [])

  return (
    <div className="bg-zinc-900 p-6 rounded-xl shadow-lg text-center">
      <h2 className="text-xl font-bold text-purple-300 mb-4">🤖 KI-Prognose</h2>
      <p className="text-md text-white">{alert ?? 'Analysiere Daten...'}</p>
    </div>
  )
}
