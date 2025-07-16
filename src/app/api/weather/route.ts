import { NextResponse } from 'next/server';
import axios from 'axios';

const API_KEY = process.env.OPENWEATHER_API_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  if (!lat || !lon) {
    return NextResponse.json({ error: 'Latitude and Longitude are required' }, { status: 400 });
  }
  
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&units=metric&appid=64ba8ed040e1ea8fb7bb7d319b8497ad`
    );

    const { main, weather } = response.data;

    return NextResponse.json({
      temperature: main.temp,
      pressure: main.pressure,
      humidity: main.humidity,
      description: weather[0].description,
    ,};
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
