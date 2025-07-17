'use client';
import React from 'react';

const PdfExportButton = () => {
  const handleExport = () => {
    alert('PDF-Export ausgelöst! (Mockup)');
  };

  return (
    <button
      onClick={handleExport}
      className="px-4 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white font-semibold"
    >
      Exportiere als PDF
    </button>
  );
};

export default PdfExportButton;
