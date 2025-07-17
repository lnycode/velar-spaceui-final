import { NextResponse } from 'next/server';
import axios from 'axios';

const API_KEY = process.env.OPENWEATHER_API_KEY;

export async function GET() {
  try {
  const { searchParams } = new URL(req.url);
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${64ba8ed040e1ea8fb7bb7d319b8497ad`};
  const lon = await res.json();

    return NextResponse.json({ weather: data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
