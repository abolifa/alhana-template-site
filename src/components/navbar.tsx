import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LanguageToggle } from "./language-switcher";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/app-provider";

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Detect scroll (only relevant on home page)
  useEffect(() => {
    if (location.pathname !== "/") {
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navs = [
    { title: t("nav.home"), path: "#hero" },
    { title: t("nav.about"), path: "#about" },
    { title: t("nav.services"), path: "#services" },
    { title: t("nav.partners"), path: "#partners" },
    { title: t("nav.contact"), path: "#contact" },
  ];

  const handleScrollOrNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }
  };

  // 🧠 Determine nav text color:
  // - On home ("/"): dynamic white→black (light mode)
  // - On other pages: always black (light mode)
  const isHome = location.pathname === "/";
  const textColor =
    theme === "light"
      ? isHome
        ? scrolled
          ? "text-black"
          : "text-white"
        : "text-black"
      : "text-white";

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-20 flex items-center z-50 transition-colors duration-300 backdrop-blur-md",
        theme === "light"
          ? isHome
            ? scrolled
              ? "bg-white/80 shadow-sm"
              : "bg-transparent"
            : "bg-white shadow-sm"
          : "bg-transparent"
      )}
    >
      <header className="container mx-auto px-5 xl:px-0 flex items-center justify-between">
        <Link to="/" className="w-16 h-16 flex items-center justify-center">
          <img
            src="/images/logo-icon.png"
            className="w-full h-full object-contain"
            alt="Logo"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navs.map((n) => (
            <a
              key={n.title + n.path}
              href={n.path}
              onClick={(e) => handleScrollOrNavigate(e, n.path)}
              className={cn(
                "text-lg font-light hover:text-orange-500 hover:underline underline-offset-4 transition-colors",
                textColor
              )}
            >
              {n.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <LanguageToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "md:hidden p-2 rounded-md hover:bg-white/10 transition",
              textColor
            )}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg md:hidden shadow-lg">
          <div className="flex flex-col items-center py-5 gap-4">
            {navs.map((n) => (
              <a
                key={n.title + n.path}
                href={n.path}
                onClick={(e) => handleScrollOrNavigate(e, n.path)}
                className="text-lg text-white hover:text-amber-400 transition-colors"
              >
                {n.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
