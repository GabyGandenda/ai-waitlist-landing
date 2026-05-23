'use client';

import { useEffect, useRef } from 'react';

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle animated circles
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.05 + i * 0.02})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        const radius = 100 + i * 100 + Math.sin(time * 0.001 + i) * 50;
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          radius,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};