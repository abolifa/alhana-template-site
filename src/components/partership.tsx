"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Partnership = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const partners = [
    {
      id: 1,
      img: "/partners/1.png",
      alt: "SCPC Chimie",
      link: "scpc",
      name: t("partners.items.scpc.name"),
      desc: t("partners.items.scpc.desc"),
    },
    {
      id: 2,
      img: "/partners/2.png",
      alt: "SOFAP",
      link: "sofap",
      name: t("partners.items.sofap.name"),
      desc: t("partners.items.sofap.desc"),
    },
    {
      id: 3,
      img: "/partners/3.png",
      link: "cib",
      alt: "Cheikhrouhou International Broker’s",
      name: t("partners.items.cib.name"),
      desc: t("partners.items.cib.desc"),
    },
    {
      id: 4,
      img: "/partners/4.png",
      link: "stracau",
      alt: "STRACAU Valves France",
      name: t("partners.items.stracau.name"),
      desc: t("partners.items.stracau.desc"),
    },
  ];

  return (
    <section
      id="partners"
      className="relative w-full py-24 bg-linear-to-b from-background via-muted/10 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,75,0,0.10),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl leading-relaxed font-extrabold text-center mb-14 bg-linear-to-r from-[#FF4B00] via-orange-500 to-yellow-400 bg-clip-text text-transparent"
        >
          {t("partners.title")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/${p.link}`)}
              className="cursor-pointer relative group bg-card/50 rounded-3xl border border-border/40 p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg hover:shadow-[#FF4B00]/20 backdrop-blur-sm transition-all hover:-translate-y-2"
            >
              <div className="w-36 h-36 flex items-center justify-center mb-6 bg-white rounded-xl overflow-hidden shadow-inner">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="object-contain w-28 h-28 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-base font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                {p.desc}
              </p>
              <button
                onClick={() => navigate(`/partners/${p.id}`)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#FF4B00] text-white hover:bg-[#e54400] transition-transform hover:scale-105 shadow-md"
              >
                {t("partners.learn_more")}
              </button>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-t from-[#FF4B00]/10 to-transparent rounded-3xl transition duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
