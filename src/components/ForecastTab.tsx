'use client';

import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

export default function ForecastTab() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6 text-center">
      <motion.h2
        className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Migräne-Vorhersage
      </motion.h2>

      <motion.div
        className="text-sm text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Wähle ein Datum und erhalte die Prognose:
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-md"
        />
      </motion.div>

      <motion.div
        className="text-lg text-teal-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {date ? `Vorhersage für ${date.toLocaleDateString()}: 🌌 42 % Risiko` : 'Kein Datum gewählt'}
      </motion.div>
    </div>
  );
}
