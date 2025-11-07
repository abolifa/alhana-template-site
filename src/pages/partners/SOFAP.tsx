"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SOFAP = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const products = [
    {
      title: t("sofap.products.0.title"),
      desc: t("sofap.products.0.desc"),
      image: "/sofap/1.png",
    },
    {
      title: t("sofap.products.1.title"),
      desc: "High-density mineral used as a weighting agent in oil and gas drilling fluids, ensuring wellbore stability and pressure control.",
      image: "/sofap/2.png",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl space-y-16">
        {/* Hero / Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          <img
            src="/partners/2.png"
            alt="SOFAP Company"
            className="w-48 h-48 object-contain mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#243673] mb-4">
            {t("sofap.title")}
          </h1>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            {t("sofap.description")}
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-muted/10 p-8 rounded-2xl border border-border shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#243673]">
            {t("sofap.mission_title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("sofap.mission_desc")}
          </p>
        </motion.div>

        {/* Products Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">
            {t("sofap.products_title")}
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
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-72 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer / CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate(-1)}
            className="inline-block px-10 py-3 rounded-full bg-[#243673] text-white font-semibold hover:bg-[#e54400] transition"
          >
            {t("buttons.back_home")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SOFAP;
