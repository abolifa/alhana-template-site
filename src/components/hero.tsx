import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const mediaSequence = [
  { type: "image", src: "/images/1.jpg", duration: 10 },
  { type: "video", src: "/videos/1.mp4", duration: 10 },
  { type: "video", src: "/videos/2.mp4", duration: 10 },
];

const perks = [
  { title: "hero.perks.quality" },
  { title: "hero.perks.reliability" },
  { title: "hero.perks.innovation" },
  { title: "hero.perks.partnership" },
];

const Hero = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((p) => (p + 1) % mediaSequence.length),
      mediaSequence[index].duration * 1000
    );
    return () => clearTimeout(timer);
  }, [index]);

  const current = mediaSequence[index];

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
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

      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/40" />
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 text-center">
          <img
            src="/images/logo-white.png"
            alt="Logo"
            className="mx-auto w-56 md:w-64 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-6"
          />
          <div className="flex flex-col md:flex-row justify-center items-center  gap-2 mt-6">
            {perks.map((p, index) => (
              <>
                <span key={p.title} className="text-white text-lg font-medium">
                  {t(p.title)}
                </span>

                {index < perks.length - 1 && (
                  <span className="bg-orange-500 h-1.5 w-1.5 rounded-full hidden md:block"></span>
                )}
              </>
            ))}
          </div>

          <a
            href="#about"
            className="inline-block mt-10 px-10 py-4 rounded-full font-semibold text-white shadow-lg bg-[#FF4B00] hover:bg-[#e54400] transition"
          >
            {t("buttons.explore_now")}
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
