"use client";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  label: string;
  Icon: LucideIcon;
}

export const Counter = ({ value, label, Icon }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = 16;
    const increment = (end - start) / (duration / stepTime);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center backdrop-blur-md bg-white/10 dark:bg-white/5 border border-border rounded-2xl px-6 py-20 shadow-lg hover:shadow-amber-500/20 transition-all duration-500"
    >
      <Icon className="text-amber-500 w-14 h-14 mb-4" />
      <span className="text-3xl md:text-4xl font-bold text-amber-500">
        {count}+
      </span>
      <span className="mt-3 text-muted-foreground text-sm md:text-base font-medium">
        {label}
      </span>
    </motion.div>
  );
};
