"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/gallery/2.jpg",
  "/gallery/1.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
];

const Gallery = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! + 1) % images.length);
  };

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! - 1 + images.length) % images.length);
  };

  return (
    <section
      id="gallery"
      className="relative w-full py-24 bg-linear-to-b from-background via-muted/10 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.08),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-amber-500 text-center mb-14"
        >
          {t("our_gallery")}
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-3 rounded-3xl overflow-hidden aspect-video">
          {images.map((src, i) => {
            const layout = [
              "col-span-2 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-1 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
            ];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(i)}
                className={`relative overflow-hidden ${layout[i]} group cursor-pointer`}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Full Preview */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 text-white/80 hover:text-white"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Prev / Next Buttons */}
            <button
              onClick={prev}
              className="absolute left-4 md:left-10 text-white/70 hover:text-white"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 md:right-10 text-white/70 hover:text-white"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image with swipe */}
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`Gallery full ${activeIndex + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100) next();
                else if (info.offset.x > 100) prev();
              }}
              className="max-h-[90vh] max-w-[90vw] object-contain select-none rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
