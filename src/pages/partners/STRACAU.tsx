"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const STRACAU = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sectors = [
    {
      color: "bg-[#F7931E]/10 border-[#F7931E]",
      title: t("stracau.sectors.0.title"),
      desc: t("stracau.sectors.0.desc"),
      image: "/stracau/1.jpg",
    },
    {
      color: "bg-[#009FE3]/10 border-[#009FE3]",
      title: t("stracau.sectors.1.title"),
      desc: t("stracau.sectors.1.desc"),
      image: "/stracau/2.jpg",
    },
    {
      color: "bg-[#8DC63F]/10 border-[#8DC63F]",
      title: t("stracau.sectors.2.title"),
      desc: t("stracau.sectors.2.desc"),
      image: "/stracau/3.jpeg",
    },
    {
      color: "bg-[#F15A24]/10 border-[#F15A24]",
      title: t("stracau.sectors.3.title"),
      desc: t("stracau.sectors.3.desc"),
      image: "/stracau/4.jpg",
    },
  ];

  const products = [
    {
      title: t("stracau.products.0.title"),
      desc: t("stracau.products.0.desc"),
      image: "/stracau/products/1.png",
    },
    {
      title: t("stracau.products.1.title"),
      desc: t("stracau.products.1.desc"),
      image: "/stracau/products/2.png",
    },
    {
      title: t("stracau.products.2.title"),
      desc: t("stracau.products.2.desc"),
      image: "/stracau/products/3.png",
    },
    {
      title: t("stracau.products.3.title"),
      desc: t("stracau.products.3.desc"),
      image: "/stracau/products/4.png",
    },
    {
      title: t("stracau.products.4.title"),
      desc: t("stracau.products.4.desc"),
      image: "/stracau/products/5.png",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl space-y-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <img
            src="/partners/4.png"
            alt="STRACAU Valves France"
            className="w-64 h-auto mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-muted-foreground">
            {t("stracau.title")}
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("stracau.description")}
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-muted/10 p-8 rounded-2xl border border-border shadow-sm text-center"
        >
          <h2 className="text-2xl font-semibold mb-3 text-muted-foreground">
            {t("stracau.mission_title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {t("stracau.mission_desc")}
          </p>
        </motion.div>

        {/* Sectors */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("stracau.sectors_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-2xl border p-6 hover:shadow-lg hover:-translate-y-1 transition ${s.color}`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">
            {t("scpc.products_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition bg-card/50 backdrop-blur-sm"
              >
                <div className="w-full h-72 bg-white/95 border rounded  mb-4">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate(-1)}
            className="inline-block px-10 py-3 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-600 transition"
          >
            {t("buttons.back_home")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default STRACAU;
