'use client'

import { exportMigraineReport } from '@/lib/pdfExport'

export function PdfExportButton() {
  return (
    <button
      onClick={exportMigaineReport}
      className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text_white rounded-xl transition font-semibold"
    >
      PDF exportieren
    </button>
  )
}
