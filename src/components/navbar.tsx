import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./toggle-button";
import { LanguageToggle } from "./language-switcher";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navs = [
    { title: t("home_nav"), path: "#hero" },
    { title: t("about_nav"), path: "#about" },
    { title: t("services_nav"), path: "#services" },
    { title: t("blog_nav"), path: "#blog" },
    { title: t("contact_nav"), path: "#contact" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 flex items-center z-50 bg-transparent backdrop-blur-md">
      <header className="container mx-auto px-5 xl:px-0 flex items-center justify-between">
        <Link to="/" className="w-24 h-20 flex items-center justify-center">
          <img
            src="/images/logo-3.png"
            className="w-full h-full object-contain"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navs.map((nav) => {
            return (
              <a
                key={nav.title}
                href={nav.path}
                onClick={(e) => handleScroll(e, nav.path)}
                className={cn(
                  "text-lg font-light text-white hover:text-amber-400 hover:underline underline-offset-4 transition-colors ease-in-out duration-300"
                )}
              >
                {nav.title}
              </a>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <LanguageToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg md:hidden shadow-lg transition-all">
          <div className="flex flex-col items-center py-5 gap-4">
            {navs.map((nav) => (
              <a
                key={nav.title}
                href={nav.path}
                onClick={(e) => handleScroll(e, nav.path)}
                className="text-lg text-white hover:text-amber-400 transition-colors"
              >
                {nav.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
