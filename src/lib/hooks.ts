'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

export const useCountUp = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const increment = target / (duration / 16);
    let current = 0;

    intervalRef.current = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [target, duration]);

  return count;
};

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return { copied, copy };
};