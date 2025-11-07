import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-linear-to-b from-background via-muted/20 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,75,0,0.10),transparent_65%)] pointer-events-none" />
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
            {t("about.title")}
          </h2>
          <p className="text-base text-muted-foreground text-justify mt-5">
            {t("about.p1")}
          </p>
          <p className="text-base text-muted-foreground text-justify">
            {t("about.p2")}
          </p>
          <p className="text-base text-muted-foreground text-justify">
            {t("about.p3")}
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            {t("buttons.learn_more")}
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md md:max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-border">
            <img
              src="/images/4.jpeg"
              alt="Operations"
              className="object-cover w-full h-full opacity-85"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
