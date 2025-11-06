"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaGraduationCap,
  FaMoneyBillWave,
  FaPassport,
  FaTicketAlt,
} from "react-icons/fa";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.visa_assistance.title"),
      description: t("services.visa_assistance.description"),
      detailsTitle: t("services.visa_assistance.details_title"),
      icon: FaPassport,
      details: [
        {
          flag: "/flags/1.webp",
          name: t("services.visa_assistance.details.0"),
        },
        {
          flag: "/flags/2.webp",
          name: t("services.visa_assistance.details.1"),
        },
        { flag: "/flags/3.png", name: t("services.visa_assistance.details.2") },
        { flag: "/flags/4.png", name: t("services.visa_assistance.details.3") },
        { flag: "/flags/5.png", name: t("services.visa_assistance.details.4") },
        {
          flag: "/flags/6.webp",
          name: t("services.visa_assistance.details.5"),
        },
        { flag: "/flags/7.png", name: t("services.visa_assistance.details.6") },
        { flag: "/flags/8.png", name: t("services.visa_assistance.details.7") },
        {
          flag: "/flags/11.webp",
          name: t("services.visa_assistance.details.8"),
        },
      ],
    },
    {
      title: t("services.flight_booking.title"),
      description: t("services.flight_booking.description"),
      icon: FaTicketAlt,
      detailsTitle: t("services.flight_booking.details_title"),
      details: [
        {
          flag: "/airlines/1.png",
          name: t("services.flight_booking.details.0"),
        },
        {
          flag: "/airlines/5.png",
          name: t("services.flight_booking.details.1"),
        },
        {
          flag: "/airlines/6.png",
          name: t("services.flight_booking.details.2"),
        },
        {
          flag: "/airlines/7.png",
          name: t("services.flight_booking.details.3"),
        },
        {
          flag: "/airlines/8.jpg",
          name: t("services.flight_booking.details.4"),
        },
        {
          flag: "/airlines/2.jpg",
          name: t("services.flight_booking.details.5"),
        },
        {
          flag: "/airlines/3.jpg",
          name: t("services.flight_booking.details.6"),
        },
        {
          flag: "/airlines/9.png",
          name: t("services.flight_booking.details.7"),
        },
        {
          flag: "/airlines/10.png",
          name: t("services.flight_booking.details.8"),
        },
        {
          flag: "/airlines/4.png",
          name: t("services.flight_booking.details.9"),
        },
      ],
    },
    {
      title: t("services.financial_services.title"),
      description: t("services.financial_services.description"),
      icon: FaMoneyBillWave,
      detailsTitle: t("services.financial_services.details_title"),
      details: [
        {
          flag: "/finance/insurance.png",
          name: t("services.financial_services.details.0"),
        },
        {
          flag: "/finance/exchange.png",
          name: t("services.financial_services.details.1"),
        },
      ],
    },
    {
      title: t("services.study_programs.title"),
      description: t("services.study_programs.description"),
      icon: FaGraduationCap,
      detailsTitle: t("services.study_programs.details_title"),
      details: [
        {
          flag: "/study/globe.jpg",
          name: t("services.study_programs.details.0"),
        },
        {
          flag: "/study/globe.jpg",
          name: t("services.study_programs.details.1"),
        },
        {
          flag: "/study/globe.jpg",
          name: t("services.study_programs.details.2"),
        },
        {
          flag: "/study/globe.jpg",
          name: t("services.study_programs.details.3"),
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative -mt-24 z-20 w-full flex flex-col items-center"
    >
      <div className="container mx-auto px-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 0.6 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} layout>
              {/* Card */}
              <div
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className={`cursor-pointer bg-sidebar border border-border rounded-2xl p-8 text-center shadow-xl transition-all hover:shadow-2xl ${
                  activeIndex === index ? "ring-2 ring-amber-500" : ""
                }`}
              >
                <service.icon className="text-5xl text-amber-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {service.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 px-6 py-2 bg-amber-500 text-white font-medium rounded-full hover:bg-amber-600 transition"
                >
                  {activeIndex === index
                    ? t("services.hide_details")
                    : t("services.view_more")}
                </motion.button>
              </div>

              {/* Mobile detail block */}
              <div className="block lg:hidden">
                {activeIndex === index && (
                  <motion.div
                    key={`details-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full mt-4 bg-muted/10 border border-border rounded-2xl p-6 shadow-inner"
                  >
                    <h4 className="text-xl font-bold text-amber-500 mb-4 text-center">
                      {service.detailsTitle}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {service.details.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex flex-col items-center justify-center bg-background border border-border rounded-xl p-3 hover:bg-muted/30 transition"
                        >
                          <img
                            src={item.flag}
                            alt={item.name}
                            className="object-contain w-20 h-20"
                          />
                          <span className="mt-2 text-sm font-medium text-foreground">
                            {item.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop persistent area */}
        <motion.div
          layout
          className="hidden lg:block overflow-hidden transition-all"
          animate={{
            height: activeIndex !== null ? "auto" : 0,
            opacity: activeIndex !== null ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {activeIndex !== null && (
            <motion.div
              key={`details-desktop-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 bg-muted/10 border border-border rounded-2xl p-8 shadow-inner"
            >
              <h4 className="text-2xl font-bold text-amber-500 mb-6 text-center">
                {services[activeIndex].detailsTitle}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {services[activeIndex].details.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="flex flex-col items-center justify-center bg-background border border-border rounded-xl p-4 hover:bg-muted/30 transition"
                  >
                    <img
                      src={item.flag}
                      alt={item.name}
                      className="object-contain w-full h-20"
                    />
                    <span className="mt-3 text-sm text-foreground font-medium">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
