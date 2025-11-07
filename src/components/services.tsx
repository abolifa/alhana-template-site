import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaIndustry,
  FaFlask,
  FaCogs,
  FaGlobe,
  FaProjectDiagram,
  FaLightbulb,
} from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <FaIndustry className="text-4xl text-orange-500 mb-4" />,
      title: t("services.items.oil_gas.title"),
      desc: t("services.items.oil_gas.desc"),
    },
    {
      icon: <FaFlask className="text-4xl text-orange-500 mb-4" />,
      title: t("services.items.chemical.title"),
      desc: t("services.items.chemical.desc"),
    },
    {
      icon: <FaCogs className="text-4xl text-orange-500 mb-4" />,
      title: t("services.items.industrial_supply.title"),
      desc: t("services.items.industrial_supply.desc"),
    },
    {
      icon: <FaGlobe className="text-4xl text-orange-500 mb-4" />,
      title: t("services.items.international_brokerage.title"),
      desc: t("services.items.international_brokerage.desc"),
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-orange-500 mb-4" />,
      title: t("services.items.project_support.title"),
      desc: t("services.items.project_support.desc"),
    },
    {
      icon: <FaLightbulb className="text-4xl text-orange-500 mb-4" />,
      title: t("services.items.research_innovation.title"),
      desc: t("services.items.research_innovation.desc"),
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-24 bg-linear-to-b from-background via-muted/10 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,75,0,0.10),transparent_65%)] pointer-events-none" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-orange-500 mb-12"
        >
          {t("services.title")}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.05 }}
              viewport={{ once: true }}
              className="grou relative rounded-2xl border border-border p-8 text-center shadow-lg hover:shadow-orange-500/20 transition-all"
            >
              <div className="flex justify-center">{s.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
