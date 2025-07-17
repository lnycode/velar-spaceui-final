'use client'

import React, { useState } from 'react'
import { format } from 'date-fns'

const daysInWeek = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

export default function Calendar({
  selectedDate,
  onSelect,
}: {
  selectedDate: Date
  onSelect: (date: Date) => void
}) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  const days = []

  const prevDays = (startOfMonth.getDay() + 6) % 7 // Montag = 0
  for (let i = 0; i < prevDays; i++) {
    days.push(null)
  }

  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i))
  }

  const isSameDay = (a: Date, b: Date) =>
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()

  return (
    <div className="w-full max-w-md rounded-xl border border-white/10 p-4 bg-black/20 text-white space-y-4 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={() =>
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
          }
          className="text-white/70 hover:text-white"
        >
          ◀
        </button>
        <div className="font-semibold text-sm">
          {format(currentDate, 'MMMM yyyy')}
        </div>
        <button
          onClick={() =>
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
          }
          className="text-white/70 hover:text-white"
        >
          ▶
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/60">
        {daysInWeek.map(day => (
          <div key={day} className="font-semibold">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div key={index}>
            {day ? (
              <button
                className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-150
                  ${
                    isSameDay(day, selectedDate)
                      ? 'bg-white text-black font-bold'
                      : 'hover:bg-white/10'
                  }`}
                onClick={() => onSelect(day)}
              >
                {day.getDate()}
              </button>
            ) : (
              <div className="w-9 h-9" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
