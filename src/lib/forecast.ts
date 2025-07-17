import axios from 'axios'

type ForecastRisk = {
  date: string
  humidity: number
  pressure: number
  temperature: number
  riskScore: number
}

export async function getForecast(lat: number, lon: number): Promise<ForecastRisk[]> {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_KEY
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
    params: {
      lat,
      lon,
      units: 'metric',
      appid: apiKey,
    },
  })

  return res.data.list.map((entry: any) => {
    const humidity = entry.main.humidity
    const pressure = entry.main.pressure
    const temperature = entry.main.temp

    const riskScore = Math.min(1,
      Math.abs(humidity - 60) / 40 +
      Math.abs(pressure - 1015) / 20 +
      Math.abs(temperature - 20) / 20
    )

    return {
      date: entry.dt_txt,
      humidity,
      pressure,
      temperature,
      riskScore: parseFloat(riskScore.toFixed(2)),
    }
  })
}
