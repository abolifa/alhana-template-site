"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Cheikhrouhou = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      title: t("cib.services.0.title"),
      desc: t("cib.services.0.desc"),
      image: "/cib/1.jpg",
    },
    {
      title: t("cib.services.1.title"),
      desc: t("cib.services.1.desc"),
      image: "/cib/2.jpeg",
    },
    {
      title: t("cib.services.2.title"),
      desc: t("cib.services.2.desc"),
      image: "/cib/3.jpeg",
    },
    {
      title: t("cib.services.3.title"),
      desc: t("cib.services.3.desc"),
      image: "/cib/4.jpeg",
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
            src="/partners/3.png"
            alt="Cheikhrouhou International Brokers"
            className="w-64 h-64 object-contain mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#125367] mb-4">
            {t("cib.title")}
          </h1>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            {t("cib.description")}
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
          <h2 className="text-2xl font-semibold mb-4 text-[#125367]">
            {t("cib.mission_title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("cib.mission_desc")}
          </p>
        </motion.div>

        {/* Services Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">
            {t("cib.services_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition bg-card/50 backdrop-blur-sm"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-72 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer / CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate(-1)}
            className="inline-block px-10 py-3 rounded-full bg-[#125367] text-white font-semibold hover:bg-[#e54400] transition"
          >
            {t("buttons.back_home")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cheikhrouhou;
