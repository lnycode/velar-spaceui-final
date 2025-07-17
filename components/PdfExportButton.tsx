'use client'

import { jsPDF } from 'jspdf'
 
export function PdfExportButton() {
  const exportPDF = () => {
    const doc = new jsPDF()
    doc.text('Velar Migräne Report', 10, 10)
    doc.save('velar-report.pdf')
  }
  
  return (
    <button
      onClick={exportPDF}
      className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl text-sm shadow-md"
    >
      Exportiere PDF
    </button>
  )
}

