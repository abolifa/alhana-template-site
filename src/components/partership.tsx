"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Partnership = () => {
  const { t } = useTranslation();

  const partners = [
    {
      img: "/certified/lycca.png",
      alt: "Libyan Civil Aviation Authority",
      name: t("partnership.lycca"),
    },
    {
      img: "/certified/ministry.png",
      alt: "Ministry of Tourism",
      name: t("partnership.ministry"),
    },
    {
      img: "/certified/chamber.jpg",
      alt: "Western Region Tourism Chamber",
      name: t("partnership.chamber"),
    },
    {
      img: "/certified/insurence.svg",
      alt: "Global Insurance Company",
      name: t("partnership.insurance"),
    },
  ];

  return (
    <section
      id="certified"
      className="relative w-full py-24 bg-linear-to-b from-background via-muted/20 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,193,7,0.1),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-amber-500 mb-12"
        >
          {t("partnership.title")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group relative bg-sidebar rounded-2xl border border-border px-6 py-10 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-40 h-40 flex items-center justify-center mb-4 p-3 bg-white rounded-sm">
                <img
                  src={partner.img}
                  alt={partner.alt}
                  className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
