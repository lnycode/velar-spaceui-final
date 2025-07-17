'use client';

import { useState } from 'react';
import Calendar from './ui/calendar';
import BotAlert from './BotAlert';

export default function ForecastTab() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [forecastResult, setForecastResult] = useState<{
    probability: number;
    reason: string;
  } | null>(null);

  const aiForecastLogic = (date: Date) => {
    // Dummy-Logik: KI analysiert Datum und Wetterlage (hier: zufällig simuliert)
    const weekday = date.getDay(); // 0 = Sonntag, 6 = Samstag
    const isWeekend = weekday === 0 || weekday === 6;

    const probability = Math.round(Math.random() * 100);
    const reason = isWeekend
      ? 'Wochenenden zeigen typischerweise erhöhte Aktivität.'
      : 'Wochentage sind stabiler, aber mit Schwankungspotenzial.';

    setForecastResult({ probability, reason });
  };

  return (
    <div className="w-full space-y-6 p-4">
      <Calendar onDateChange={(date) => {
        setSelectedDate(date);
        aiForecastLogic(date);
      }} />

      {forecastResult && (
        <div className="bg-[#111827] p-4 rounded-lg border border-gray-700 shadow-md text-white">
          <h2 className="text-lg font-bold mb-2">⚡ Prognoseergebnis</h2>
          <p className="text-2xl font-extrabold text-blue-400 mb-2">
            Wahrscheinlichkeit: {forecastResult.probability}%
          </p>
          <p className="text-sm text-gray-300 italic">
            KI-Begründung: {forecastResult.reason}
          </p>
        </div>
      )}

      <BotAlert />
    </div>
  );
}
