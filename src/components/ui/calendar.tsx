import React from 'react';

export default function Calendar({
  onDateChange,
}: {
  onDateChange: (date: Date) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = new Date(e.target.value);
    if (!isNaN(selected.getTime())) {
      onDateChange(selected);
    }
  };

  return (
    <div className="w-full text-white">
      <label className="text-sm font-semibold mb-1 block">Datum wählen</label>
      <input
        type="date"
        onChange={handleChange}
        className="w-full bg-[#0f172a] text-white px-4 py-2 rounded-md border border-gray-600 shadow-md hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      />
    </div>
  );
}
