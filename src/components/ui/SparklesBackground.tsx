'use client';

import { useEffect } from 'react'

export default function SparklesBackground() {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    document.body.appendChild(canvas)
    canvas.className = 'fixed inset-0 z-0 pointer-events-none'
    canvas.style.opacity = '0.3'

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight
    let stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'white'
      stars.forEach(s => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI)
        ctx.fill()
      })
    }

    const loop = () => {
      render()
      stars.forEach(s => {
        s.y += 0.2
        if (s.y > height) s.y = 0
      })
      requestAnimationFrame(loop)
    }

    loop()
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    })

    return () => canvas.remove()
  }, [])

  return null
}


