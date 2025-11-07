import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://alhana.com.ly/contact-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (res.ok) {
        setSent(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          company: "",
        });
      } else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-muted/10 to-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,75,0,0.10),transparent_65%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-orange-500 text-center mb-14"
        >
          {t("contact.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 p-8 rounded-3xl backdrop-blur-md bg-white/10 dark:bg-white/5 border border-border shadow-xl"
          >
            <input
              name="name"
              type="text"
              placeholder={t("contact.form.name")}
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-orange-500"
            />
            {/* honeypot */}
            <input
              name="company"
              type="text"
              value={(formData as any).company || ""}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            />
            <input
              name="email"
              type="email"
              placeholder={t("contact.form.email")}
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-orange-500"
            />
            <input
              name="phone"
              type="text"
              placeholder={t("contact.form.phone")}
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-orange-500"
            />
            <textarea
              name="message"
              rows={10}
              placeholder={t("contact.form.message")}
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-background border border-border placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-lg transition"
            >
              {loading
                ? t("contact.form.sending")
                : sent
                ? t("contact.form.sent")
                : error
                ? t("contact.form.error")
                : t("contact.form.submit")}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="px-8 py-12 rounded-3xl backdrop-blur-md bg-white/10 dark:bg-white/5 border border-border shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-orange-500">
                {t("app.brand")}
              </h3>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <p className="text-muted-foreground">{t("contact.address")}</p>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-orange-500" />
                <a
                  href="tel:+218912008004"
                  dir="ltr"
                  className="text-muted-foreground underline underline-offset-2 hover:text-orange-500"
                >
                  {t("contact.phone")}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <a
                  href="tel:+218913119741"
                  dir="ltr"
                  className="text-muted-foreground underline underline-offset-2 hover:text-orange-500"
                >
                  {t("contact.phone2")}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <a
                  href="mailto:info@aalialmajdholding.com.ly"
                  className="text-muted-foreground underline underline-offset-2 hover:text-orange-500"
                >
                  {t("contact.email")}
                </a>
              </div>
            </div>
            <div className="flex-1 overflow-hidden rounded-3xl border border-border shadow-xl">
              <iframe
                title={t("contact.map_title")}
                src="https://www.google.com/maps?q=32.34632016596397,15.103919352180574&hl=ar&z=16&output=embed"
                className="w-full h-full min-h-[350px] rounded-3xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
