"use client";
import { motion } from "framer-motion";
import { Counter } from "./counter";
import { Globe, Plane, Target, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-linear-to-b from-background via-muted/20 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,193,7,0.12),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 text-foreground"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500">
            {t("about_us")}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-justify">
            {t("about_description")}
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block mt-4 px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition"
          >
            {t("learn_more")}
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md md:max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-border">
            <img
              src="/images/office.jpg"
              alt="Travel team"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-background/30 to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Counter Icon={Target} value={15} label={t("years_of_experience")} />
          <Counter Icon={Globe} value={250} label={t("global_partners")} />
          <Counter Icon={Users} value={1000} label={t("satisfied_clients")} />
          <Counter Icon={Plane} value={120} label={t("destinations")} />
        </div>
      </div>
    </section>
  );
};

export default About;
