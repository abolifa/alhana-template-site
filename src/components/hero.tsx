"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const mediaSequence = [
  { type: "image", src: "/hero/libyan-desert.jpg", duration: 10 },
  { type: "video", src: "/videos/2.mp4", duration: 10 },
  { type: "video", src: "/videos/1.mp4", duration: 10 },
];

const Hero = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const { duration } = mediaSequence[index];
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % mediaSequence.length);
    }, duration * 1000);
    return () => clearTimeout(timer);
  }, [index]);

  const current = mediaSequence[index];

  return (
    <section
      id="hero"
      className="relative w-full h-[calc(90vh)] flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {current.type === "image" ? (
          <motion.div
            key={current.src}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.src})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        ) : (
          <motion.video
            key={current.src}
            className="absolute inset-0 w-full h-full object-cover"
            src={current.src}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl tracking-wide leading-tight">
            {t("hero_title")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {t("hero_subtitle")}
          </p>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block mt-10 px-10 py-4 bg-amber-500 text-white font-semibold rounded-full shadow-xl hover:bg-amber-600 transition"
          >
            {t("explore_now")}
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
};

export default Hero;
