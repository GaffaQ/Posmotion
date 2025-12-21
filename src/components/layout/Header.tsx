import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/news", label: "Info Lomba" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-cyan-700/95 backdrop-blur-lg shadow-lg py-3 border-b border-cyan-400/20"
          : "bg-gradient-to-b from-blue-950/40 to-transparent py-5 border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logoImage} alt="Posmotion Logo" className="w-10 h-10 object-contain" />
          </motion.div>
          <div className="flex flex-col">
            <span className={cn(
              "text-2xl font-heading font-bold transition-colors duration-300 leading-none",
              isScrolled ? "text-white" : "text-white"
            )}>
              Posmotion
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group flex items-center gap-1",
                  location.pathname === link.href
                    ? isScrolled 
                      ? "bg-cyan-400/20 text-cyan-100 shadow-lg shadow-cyan-400/20" 
                      : "bg-white/15 text-white shadow-lg shadow-cyan-300/30"
                    : isScrolled 
                      ? "text-cyan-100 hover:bg-cyan-400/10 hover:text-white" 
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
                <motion.span
                  className={cn(
                    "inline-block transition-transform duration-300",
                    location.pathname === link.href && "-rotate-180"
                  )}
                >
                  <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* <Button
            asChild
            className={cn(
              "rounded-lg font-semibold transition-all duration-300",
              isScrolled
                ? "bg-gradient-to-r from-cyan-400 to-blue-400 hover:shadow-lg hover:shadow-cyan-400/50 text-blue-950"
                : "bg-gradient-to-r from-cyan-300 to-blue-300 hover:shadow-lg hover:shadow-cyan-300/50 text-blue-950"
            )}
          >
            <a href="#contact">Juknis</a>
          </Button> */}
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden p-2 rounded-lg transition-all duration-300",
            isScrolled 
              ? "text-white hover:bg-cyan-400/20" 
              : "text-white hover:bg-white/10"
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "md:hidden border-t",
              isScrolled
                ? "bg-gradient-to-b from-blue-800/95 to-blue-900/95 border-cyan-400/20"
                : "bg-gradient-to-b from-blue-900/50 to-blue-950/50 border-cyan-300/30"
            )}
          >
            <nav className="container px-4 py-4 flex flex-col gap-2 space-y-2">
              {navLinks.map((link) => (
                <motion.div key={link.href} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={link.href}
                    className={cn(
                      "block py-3 px-4 rounded-lg font-medium transition-all duration-300",
                      location.pathname === link.href
                        ? "bg-gradient-to-r from-cyan-400/30 to-blue-400/30 text-white shadow-lg shadow-cyan-400/20"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="pt-2">
                {/* <Button
                  asChild
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:shadow-lg hover:shadow-cyan-400/50 text-blue-950 font-semibold rounded-lg"
                >
                  <a href="#contact">Juknis</a>
                </Button> */}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
