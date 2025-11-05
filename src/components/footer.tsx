"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const { t } = useTranslation();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("footer.subscribed", { email }));
    setEmail("");
  };

  const quickLinks = [
    { href: "#about", label: t("footer.links.about") },
    { href: "#services", label: t("footer.links.services") },
    { href: "#gallery", label: t("footer.links.gallery") },
    { href: "#contact", label: t("footer.links.contact") },
  ];

  return (
    <footer className="relative w-full bg-linear-to-b from-muted/10 via-background to-background border-t border-border pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,193,7,0.08),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-0"
        >
          <img
            src="/images/logo-3.png"
            alt="Alhana Palace Logo"
            className="w-38 h-auto mb-2"
          />
          <p className="text-muted-foreground">{t("footer.description")}</p>
          <div className="flex gap-3 mt-5">
            <a
              target="blank"
              href="https://www.facebook.com/alhana.palace"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-amber-500 text-amber-500 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/alhana_tti"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-amber-500 text-amber-500 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/company/alhana-palace"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-amber-500 text-amber-500 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold text-foreground mb-5">
            {t("footer.quick_links")}
          </h4>
          <ul className="space-y-3 text-muted-foreground">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full inline-block mx-2 mb-0.5" />
                <a href={link.href} className="hover:text-amber-500 transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold text-foreground mb-5">
            {t("footer.contact_title")}
          </h4>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-amber-500 mt-1" />
              <span>{t("footer.address")}</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-500" />
              <a href="tel:+218926811102" className="hover:text-amber-500">
                {t("footer.phone")}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-amber-500" />
              <a
                href="mailto:info@alhana.com.ly"
                className="hover:text-amber-500"
              >
                {t("footer.email")}
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h4 className="text-base font-semibold mb-4 text-amber-500">
            {t("footer.subscribe_title")}
          </h4>
          <p className="text-muted-foreground text-xs mb-4">
            {t("footer.subscribe_desc")}
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-0"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={t("footer.subscribe_placeholder")}
              className="flex-1 rounded-none p-3 border focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs"
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 px-5 py-3 rounded-none font-medium text-white transition text-xs"
            >
              {t("footer.subscribe_button")}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-16 text-center text-sm text-muted-foreground border-t border-border pt-6">
        © {new Date().getFullYear()} {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
