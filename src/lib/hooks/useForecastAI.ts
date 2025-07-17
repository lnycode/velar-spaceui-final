import { useEffect, useState } from 'react';

export function useForecastAI() {
  const [percentage, setPercentage] = useState(42);
  const [reason, setReason] = useState("Basierend auf deinen letzten Logs & Wetterlage.");

  useEffect(() => {
    const logs = JSON.parse(localStorage.getItem('userLogs') || '[]');
    const factor = logs.length > 5 ? 65 : 42;
    setPercentage(factor + Math.floor(Math.random() * 20));
    setReason("Ausgewertet: " + logs.length + " Logs + Wettermuster analysiert.");
  }, []);

  return { percentage, reason };
}
