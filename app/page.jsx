"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Users, Globe, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import Carousel from "../components/Carousel";

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const pastClients = [
    { name: "Ledger", logo: "/clients/ledget.jpg" },
    { name: "Bitget", logo: "/clients/bitget.jpg" },
    { name: "BoundlessPay", logo: "/clients/boundlesspay.jpg" },
    { name: "Bitmana", logo: "/clients/bitmana.jpg" },
    { name: "Dx-Sale", logo: "/clients/dx-sale.jpg" },
    { name: "Gcs", logo: "/clients/gcs.jpg" },
    { name: "Kucoin", logo: "/clients/kucoin.jpg" },
    { name: "Minutes", logo: "/clients/minutes.jpg" },
    { name: "MMKR", logo: "/clients/nmkr.jpg" },
    { name: "Numerico", logo: "/clients/numerico.jpg" },
    { name: "Whitebit", logo: "/clients/whitebit.jpg" },
    { name: "World Mobile", logo: "/clients/world-mobile.jpg" },
    { name: "AshToken", logo: "/clients/ashtoken.jpg" },
  ];

  const partners = [
    { name: "Exchange Pro" },
    { name: "Fintech Hub" },
    { name: "Digital Bank" },
    { name: "Crypto Exchange" },
    { name: "Mobile Money" },
    { name: "Telco Partner" },
  ];

  const features = [
    {
      icon: Target,
      title: "Market Entry Strategy",
      description:
        "Strategic guidance for entering African digital markets with confidence and precision.",
    },
    {
      icon: Users,
      title: "Partnership Development",
      description:
        "Building meaningful relationships with key stakeholders across the continent.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connecting international brands with Africa's rapidly growing digital economy.",
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description:
        "Data-driven marketing strategies tailored for Web3 and fintech growth.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Popup />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="African Digital Innovation"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-400 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Gateway to{" "}
              <span className="text-primary">
                Africa&lsquo;s Digital Economy
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Leading Go-To-Market agency specializing in Web3, Fintech, and
              Digital Brands across Africa. We bridge global innovation with
              local expertise.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-neutral-400 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all duration-200 neon-glow"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary/10 transition-all duration-200"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-16 h-16 bg-secondary/30 rounded-full blur-lg"
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-400 mb-6">
                Bridging Innovation with Opportunity
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                AGTM Partner connects global Web3 and fintech innovators with
                Africa&apos;s dynamic digital landscape, providing strategic
                market entry and growth solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-400 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Mission & Vision */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-400 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-neutral-300 mb-8">
                  To empower global Web3 and fintech companies to successfully
                  enter and thrive in African markets through strategic
                  partnerships, localized marketing, and deep market insights.
                </p>
                <h3 className="text-2xl font-bold text-neutral-400 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-neutral-300">
                  To become Africa&apos;s leading Go-To-Market partner,
                  facilitating the continent&apos;s digital transformation while
                  creating sustainable value for all stakeholders.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                    alt="African Innovation"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                </div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-60"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Clients & Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-400 mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                We&apos;ve helped global brands successfully navigate and expand
                into African markets with proven strategies and local expertise.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Carousel items={pastClients} title="Past Clients" />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Carousel items={partners} title="Strategic Partners" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-neutral-400 mb-6"
            >
              Ready to Enter Africa&lsquo;s Digital Market?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-neutral-300 mb-8"
            >
              Let&apos;s discuss how AGTM Partner can accelerate your growth in
              Africa&apos;s rapidly expanding digital economy.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-200 neon-glow"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
