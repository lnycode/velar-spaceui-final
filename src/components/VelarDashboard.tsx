'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Line, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend)

export default function VelarDashboard() {
  const [weather, setWeather] = useState<any>(null)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`)
      .then((res) => res.json())
      .then(setWeather)
  }, [])

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: [2, 1, 4, 6, 2], // Beispielwerte
        borderColor: '#67e8f9',
        tension: 0.4,
      },
    ],
  }

  const donutData = {
    labels: ['Stress', 'Wetter', 'Trigger'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['#f9a8d4', '#67e8f9', '#a5b4fc'],
        borderWidth: 2,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a14] to-[#050509] text-white px-4 py-6 font-sans relative overflow-hidden">
      {/* Space Background Bubbles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -top-10 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-neon-cyan drop-shadow-xl">VELAR</h1>
        <p className="text-sm text-slate-400 mt-2">Dein Space-basiertes Migräne-Dashboard</p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#13142b] bg-opacity-60 rounded-3xl p-6 backdrop-blur-md shadow-lg"
        >
          <h2 className="text-pink-300 text-2xl font-semibold mb-2">Migraine Forecast</h2>
          <p className="text-cyan-300 mb-4">🧠 Risk: {weather?.weather?.[0]?.main || 'Loading...'}</p>
          <div className="bg-[#0f1025] p-4 rounded-xl">
            <Line
              data={chartData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                  y: { ticks: { color: '#94a3b8' } },
                  x: { ticks: { color: '#94a3b8' } },
                },
              }}
            />
          </div>
        </motion.div>

        {/* Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="bg-[#13142b] bg-opacity-60 rounded-3xl p-6 backdrop-blur-md shadow-lg"
        >
          <h2 className="text-purple-300 text-2xl font-semibold mb-4">Trigger-Statistik</h2>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div className="w-48 h-48">
              <Doughnut
                data={donutData}
                options={{
                  cutout: '70%',
                  plugins: {
                    legend: {
                      labels: { color: '#cbd5e1' },
                    },
                  },
                }}
              />
            </div>
            <p className="text-sm text-slate-400">Mock-Trigger für KI-Analyse</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
