'use client';

import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

export default function ExportTab() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('velar_logs');
    if (stored) setLogs(JSON.parse(stored));
  }, []);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Velar Migräne-Logs', 10, 10);
    logs.forEach((log, i) => {
      doc.text(log, 10, 20 + i * 10);
    });
    doc.save('velar_logs.pdf');
  };

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-bold text-cyan-300">PDF-Export deiner Daten</h2>
      <p className="text-slate-400 text-sm">Du kannst deine Logs exportieren und sichern.</p>
      <button
        onClick={exportPDF}
        className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition"
      >
        Jetzt als PDF exportieren
      </button>
    </div>
  );
}
