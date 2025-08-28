"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Globe,
  Users,
  DollarSign,
  Smartphone,
  Building,
  ArrowRight,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MarketsPage = () => {
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

  const industryGrowthData = [
    {
      icon: TrendingUp,
      metric: "1.4 Billion",
      description:
        "Population driving digital transformation across the continent",
    },
    {
      icon: Smartphone,
      metric: "500+ Million",
      description: "Mobile users creating unprecedented digital opportunities",
    },
    {
      icon: DollarSign,
      metric: "$180 Billion",
      description: "Digital economy projected growth by 2030",
    },
    {
      icon: Building,
      metric: "400+ Million",
      description: "Unbanked population ready for financial inclusion",
    },
  ];

  const problemStatements = [
    "Global Web3 and fintech companies struggle with market entry complexities in Africa",
    "Lack of local expertise and regulatory knowledge creates significant barriers",
    "Cultural and language barriers hinder effective communication with target audiences",
    "Limited understanding of local payment systems and financial infrastructure",
    "Difficulty in identifying and building relationships with key local partners",
    "Inadequate knowledge of diverse market dynamics across 54 African countries",
  ];

  const primaryMarkets = [
    {
      country: "Nigeria",
      population: "220M+",
      highlights: [
        "Largest economy in Africa",
        "High crypto adoption",
        "Strong fintech ecosystem",
      ],
    },
    {
      country: "South Africa",
      population: "60M+",
      highlights: [
        "Most developed financial sector",
        "Strong regulatory framework",
        "High internet penetration",
      ],
    },
    {
      country: "Kenya",
      population: "55M+",
      highlights: [
        "Mobile money pioneer",
        "Tech hub (Silicon Savannah)",
        "Innovation-friendly policies",
      ],
    },
    {
      country: "Ghana",
      population: "33M+",
      highlights: [
        "Stable political environment",
        "Growing tech sector",
        "English-speaking market",
      ],
    },
  ];

  const secondaryMarkets = [
    "Egypt - North Africa Gateway",
    "Morocco - Strategic European Access",
    "Uganda - East African Hub",
    "Rwanda - Innovation Leader",
    "Senegal - West Africa French Markets",
    "Tanzania - Large Market Potential",
  ];

  const geographicPhases = [
    {
      phase: "Phase 1",
      title: "West Africa Focus",
      markets: ["Nigeria", "Ghana", "Senegal"],
      timeline: "Q1-Q2 2025",
      description:
        "Establish strong presence in English and French-speaking West African markets",
    },
    {
      phase: "Phase 2",
      title: "East Africa Expansion",
      markets: ["Kenya", "Uganda", "Rwanda", "Tanzania"],
      timeline: "Q3-Q4 2025",
      description:
        "Leverage mobile money expertise and innovation ecosystems in East Africa",
    },
    {
      phase: "Phase 3",
      title: "Southern Africa Growth",
      markets: ["South Africa", "Zimbabwe", "Zambia"],
      timeline: "Q1-Q2 2026",
      description:
        "Tap into developed financial markets and resource-rich economies",
    },
    {
      phase: "Phase 4",
      title: "North Africa Integration",
      markets: ["Egypt", "Morocco", "Tunisia"],
      timeline: "Q3-Q4 2026",
      description: "Connect with Mediterranean and Middle Eastern markets",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-400 mb-6">
              Market <span className="text-gradient">Opportunity</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
              Africa&apos;s digital transformation presents unprecedented
              opportunities for Web3 and fintech innovation across the
              continent&apos;s diverse markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Growth */}
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
                Industry Growth Metrics
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Africa&apos;s digital economy is experiencing explosive growth,
                creating massive opportunities for innovative companies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industryGrowthData.map((item, index) => (
                <motion.div
                  key={item.metric}
                  variants={fadeInUp}
                  className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 text-center hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {item.metric}
                  </h3>
                  <p className="text-neutral-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-neutral-50">
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
                Market Entry Challenges
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Understanding the key barriers that international companies face
                when entering African markets.
              </p>
            </motion.div>

            <div className="space-y-6">
              {problemStatements.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-neutral-300 leading-relaxed pt-1">
                      {problem}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-400 mb-8">
                Our Solution
              </h2>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 rounded-2xl border border-neutral-100">
                <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                  AGTM Partner bridges the gap between global Web3/fintech
                  innovation and Africa&apos;s dynamic markets through
                  comprehensive Go-To-Market strategies, local expertise, and
                  strategic partnerships.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  We provide end-to-end market entry solutions that combine
                  global best practices with deep local knowledge, enabling
                  companies to navigate regulatory complexities, build
                  meaningful partnerships, and achieve sustainable growth across
                  African markets.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-20 bg-neutral-50">
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
                Target Markets
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Strategic focus on high-growth African markets with strong
                digital adoption and regulatory clarity.
              </p>
            </motion.div>

            {/* Primary Markets */}
            <motion.div variants={fadeInUp} className="mb-16">
              <h3 className="text-2xl font-bold text-neutral-400 mb-8 text-center">
                Primary Markets
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {primaryMarkets.map((market, index) => (
                  <motion.div
                    key={market.country}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-xl border border-neutral-100 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-neutral-400">
                        {market.country}
                      </h4>
                      <span className="text-primary font-semibold">
                        {market.population}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {market.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          <span className="text-neutral-300 text-sm">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Secondary Markets */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-neutral-400 mb-8 text-center">
                Secondary Markets
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {secondaryMarkets.map((market, index) => (
                  <motion.div
                    key={market}
                    variants={fadeInUp}
                    className="bg-white p-4 rounded-lg border border-neutral-100 text-center hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-neutral-300 font-medium">
                      {market}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Geographic Focus Phases */}
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
                Geographic Expansion Strategy
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Phased approach to market entry and expansion across African
                regions, maximizing synergies and minimizing risks.
              </p>
            </motion.div>

            <div className="space-y-8">
              {geographicPhases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  variants={fadeInUp}
                  className="bg-neutral-50 p-6 lg:p-8 rounded-xl border border-neutral-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    <div className="lg:col-span-1">
                      <div className="text-center lg:text-left">
                        <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm font-semibold mb-2">
                          {phase.phase}
                        </span>
                        <h3 className="text-xl font-bold text-neutral-400 mb-2">
                          {phase.title}
                        </h3>
                        <span className="text-secondary font-semibold">
                          {phase.timeline}
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {phase.markets.map((market) => (
                          <span
                            key={market}
                            className="px-3 py-1 bg-white border border-neutral-200 rounded-full text-sm text-neutral-300"
                          >
                            {market}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <p className="text-neutral-300 text-sm leading-relaxed text-center lg:text-left">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
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
              Ready to Tap Into Africa&apos;s Growth?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-neutral-300 mb-8"
            >
              Let&apos;s discuss how we can help you navigate these dynamic
              markets and achieve your growth objectives across the continent.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-secondary text-neutral-400 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all duration-200 neon-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketsPage;
