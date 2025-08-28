"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import next/image
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useStore } from "../store/useStore";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/markets", label: "Markets" },
    { href: "/leadership", label: "Leadership" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/logo.png" // Adjust path if needed (e.g., /images/logo.png)
                alt="AGTM Partner Logo"
                width={170} // Adjust based on your logo's actual width
                height={90} // Adjust based on your logo's actual height
                className="max-w-[120px] lg:max-w-[200px] object-contain"
                priority // Prioritize loading for above-the-fold content
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.href} whileHover={{ y: -2 }}>
                <Link
                  href={item.href}
                  className="text-neutral-400 hover:text-primary font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-secondary text-neutral-400 px-6 py-2 rounded-full font-semibold hover:bg-secondary/90 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-md text-neutral-400 hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden glass-effect border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-neutral-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="block bg-secondary text-neutral-400 px-4 py-3 rounded-lg font-semibold text-center hover:bg-secondary/90 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
