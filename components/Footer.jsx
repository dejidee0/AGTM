"use client";

import Link from "next/link";
import Image from "next/image"; // Import next/image
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Instagram,
  Code2,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/agtm-partner", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/agtmpartner", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/agtmpartnerx", label: "Twitter" },
    { icon: Mail, href: "mailto:info@agtmpartner.com", label: "Email" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/markets", label: "Markets" },
    { href: "/leadership", label: "Leadership" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-neutral-50 border-t border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/logo.png" // Adjust path if needed (e.g., /images/logo.png)
                  alt="AGTM Partner Logo"
                  width={150} // Adjust based on your logo's actual width
                  height={70} // Adjust based on your logo's actual height
                  className="max-w-[120px] lg:max-w-[150px] object-contain"
                  priority // Prioritize loading for above-the-fold content
                />
              </motion.div>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Your Gateway to Africa&apos;s Digital Economy. Leading
              Go-To-Market agency specializing in Web3, Fintech, and Digital
              Brands across Africa.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-300 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-neutral-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-neutral-400 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-neutral-300">
                <Mail size={16} />
                <span>info@agtmpartner.com</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-300">
                <Phone size={16} />
                <span>+2349154100476</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-neutral-100 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <p className="text-neutral-300 text-sm">
              © 2025 AGTM Partner. All rights reserved.
            </p>

            {/* Codemonk Credit */}
            <motion.a
              href="https://www.instagram.com/mikevibes__" // Replace with actual IG link
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-neutral-100 to-neutral-50 border border-neutral-200/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Sparkle effect */}
              <motion.div
                className="absolute -top-1 -right-1 text-primary/60"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles size={12} />
              </motion.div>

              <motion.div
                className="text-primary group-hover:text-primary/80 transition-colors duration-200"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Code2 size={16} />
              </motion.div>

              <span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-700 transition-colors duration-200 relative z-10">
                Built by{" "}
                <span className="font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent group-hover:from-primary/80 group-hover:to-purple-600/80 transition-all duration-300">
                  Codewithmonk Technology
                </span>
              </span>

              <motion.div
                className="text-primary/60 group-hover:text-primary/80 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram size={14} />
              </motion.div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 -z-10" />
            </motion.a>
          </div>

          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-neutral-300 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-neutral-300 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
