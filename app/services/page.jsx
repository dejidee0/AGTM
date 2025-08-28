"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Globe,
  Users,
  TrendingUp,
  Lightbulb,
  BookOpen,
  Calendar,
  Zap,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useStore } from "../../store/useStore";

const ServicesPage = () => {
  const { openDropdown, setOpenDropdown } = useStore();

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

  const globalServices = [
    {
      id: "market-entry",
      icon: Globe,
      title: "Market Entry & Expansion",
      description:
        "Strategic guidance for entering African markets with confidence.",
      details: [
        "Market research and opportunity assessment",
        "Regulatory landscape analysis",
        "Entry strategy development",
        "Risk assessment and mitigation",
        "Local partnership identification",
        "Go-to-market timeline planning",
      ],
    },
    {
      id: "partnerships",
      icon: Users,
      title: "Strategic Partnerships",
      description: "Building meaningful relationships with key stakeholders.",
      details: [
        "Partner identification and vetting",
        "Relationship building and management",
        "Joint venture structuring",
        "Partnership agreement negotiations",
        "Strategic alliance development",
        "Ecosystem integration planning",
      ],
    },
    {
      id: "marketing-growth",
      icon: TrendingUp,
      title: "Marketing & Growth",
      description: "Data-driven marketing strategies for sustainable growth.",
      details: [
        "Brand positioning and messaging",
        "Digital marketing campaigns",
        "Content marketing strategy",
        "Social media management",
        "Performance marketing optimization",
        "Growth hacking initiatives",
      ],
    },
    {
      id: "experimental-marketing",
      icon: Lightbulb,
      title: "Experimental Marketing",
      description: "Innovative approaches to capture market attention.",
      details: [
        "Guerrilla marketing campaigns",
        "Viral marketing strategies",
        "Interactive experiences",
        "Influencer collaborations",
        "Community activation events",
        "Creative PR initiatives",
      ],
    },
    {
      id: "education-community",
      icon: BookOpen,
      title: "Education & Community Building",
      description: "Building awareness and fostering community engagement.",
      details: [
        "Educational content development",
        "Webinar and workshop series",
        "Community platform management",
        "Ambassador program development",
        "Thought leadership positioning",
        "Knowledge sharing initiatives",
      ],
    },
    {
      id: "events-representation",
      icon: Calendar,
      title: "Events & Representation",
      description: "Strategic event participation and brand representation.",
      details: [
        "Conference speaking opportunities",
        "Trade show representation",
        "Networking event coordination",
        "VIP relationship management",
        "Industry awards submissions",
        "Media appearances coordination",
      ],
    },
    {
      id: "web3-addons",
      icon: Zap,
      title: "Web3 Special Add-ons",
      description: "Specialized services for blockchain and Web3 companies.",
      details: [
        "Token launch strategy",
        "DeFi integration planning",
        "NFT marketplace development",
        "Blockchain education programs",
        "Cryptocurrency adoption strategies",
        "Regulatory compliance guidance",
      ],
    },
  ];

  const localServices = {
    title: "Helping Local Brands Compete & Scale",
    shortDesc:
      "We help local brands in Africa position, market, and scale with cutting-edge strategies tailored to today's digital-first economy.",
    longDesc:
      "At AGTM Partner, we give local businesses the competitive edge they need to stand out in a crowded market. Our team blends digital strategy, experimental marketing, and market positioning to help your brand: Build visibility and trust in the local market. Engage your audience with creative, data-driven campaigns. Test innovative strategies for growth (social-first, community-driven, experiential).",
    services: [
      {
        icon: Target,
        title: "Market Positioning Strategy",
        description:
          "Define your unique value proposition and competitive advantage in the local market.",
      },
      {
        icon: TrendingUp,
        title: "Digital Marketing Campaigns",
        description:
          "Comprehensive digital strategies across social media, search, and content marketing.",
      },
      {
        icon: Lightbulb,
        title: "Experimental / Guerrilla Marketing",
        description:
          "Creative, unconventional marketing approaches to create buzz and engagement.",
      },
      {
        icon: BookOpen,
        title: "Brand Storytelling & Content Creation",
        description:
          "Compelling narratives and content that resonate with your target audience.",
      },
      {
        icon: Heart,
        title: "Community Building & Engagement",
        description:
          "Foster loyal communities around your brand through authentic engagement strategies.",
      },
    ],
  };

  const p2pServices = [
    {
      icon: Users,
      title: "Affiliate Programs",
      description:
        "Design and manage performance-based affiliate marketing programs.",
    },
    {
      icon: Globe,
      title: "Exchange & Wallet Partnerships",
      description:
        "Strategic partnerships with leading exchanges and wallet providers.",
    },
    {
      icon: Zap,
      title: "Token Launch Support",
      description:
        "End-to-end support for cryptocurrency and token launch initiatives.",
    },
    {
      icon: TrendingUp,
      title: "Payment Gateway Integration",
      description:
        "Seamless integration of payment solutions for P2P transactions.",
    },
  ];

  const toggleDropdown = (serviceId) => {
    setOpenDropdown(openDropdown === serviceId ? null : serviceId);
  };

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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
              Comprehensive Go-To-Market solutions designed to accelerate your
              success in Africa&apos;s dynamic digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Services */}
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
                Global Services
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Strategic pillars designed to help international companies
                successfully enter and scale in African markets.
              </p>
            </motion.div>

            <div className="space-y-6">
              {globalServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="bg-neutral-50 rounded-xl border border-neutral-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleDropdown(service.id)}
                    className="w-full p-6 lg:p-8 flex items-center justify-between text-left hover:bg-neutral-100/50 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-400 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-neutral-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: openDropdown === service.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-6 h-6 text-neutral-300" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openDropdown === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-neutral-200">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {service.details.map((detail, index) => (
                              <motion.div
                                key={detail}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center space-x-3"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                <span className="text-neutral-300">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Services */}
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
                {localServices.title}
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-8">
                {localServices.shortDesc}
              </p>
              <div className="bg-white p-6 lg:p-8 rounded-xl border border-neutral-100">
                <p className="text-neutral-300 leading-relaxed">
                  {localServices.longDesc}
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {localServices.services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl border border-neutral-100 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-400 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-300 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* P2P Merchants */}
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
                P2P Merchants
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Specialized services for peer-to-peer merchants and
                cryptocurrency trading platforms across Africa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {p2pServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="bg-neutral-50 p-8 rounded-xl border border-neutral-100 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-400 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>
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
              Let&apos;s Position Your Brand for Growth
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-neutral-300 mb-8"
            >
              Ready to accelerate your success in Africa&apos;s digital economy?
              Talk to us today about your growth objectives.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-secondary text-neutral-400 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all duration-200 neon-glow"
                >
                  Talk to Us Today
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

export default ServicesPage;
