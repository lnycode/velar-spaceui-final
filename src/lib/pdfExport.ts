import jsPDF from 'jspdf'

export function exportMigraineReport(entries: any[]) {
  const doc = new jsPDF()

  doc.setFontSize(18)
  doc.text('VELAR - Migränebericht', 20, 20)

  doc.setFontSize(12)
  doc.text('Zeitraum: Letzte 30 Tage', 20, 40)
  doc.text('Attacken: 12', 20,50)
  doc.text('Durchschnittliche Intensität: 7/10', 20, 60)
  doc.text('Häufigste Trigger: Stress, Schlafmangel', 20, 70)    

  doc.save('velar-migraine_report.pdf')
}
