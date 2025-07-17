export async function getGPTAnalysis(prompt: string) {
  const res = await fetch('/api/gpt-coach', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  })

  const data = await res.json()
  return data.result
}
