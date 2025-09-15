"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronDown,
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
  Building,
  Coins,
  Database,
  BarChart,
  Handshake,
  Rocket,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("global");
  const [openDropdown, setOpenDropdown] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categories = [
    {
      id: "global",
      title: "Global Expansion",
      subtitle: "For International Companies",
      icon: Globe,
      color: "primary",
    },
    {
      id: "local",
      title: "Local Growth",
      subtitle: "For African Brands",
      icon: Building,
      color: "secondary",
    },
    {
      id: "p2p",
      title: "Africa’s Largest P2P Merchant Access Database",
      subtitle: "For Crypto & Fintech",
      icon: Coins,
      color: "accent",
    },
  ];

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

  const localServices = [
    {
      id: "postioning-strategy",
      icon: Target,
      title: "Market Positioning Strategy",
      description:
        "Define your unique value proposition and competitive advantage in the local market.",
      features: [
        "Competitive analysis and positioning",
        "Brand differentiation strategy",
        "Value proposition development",
        "Market opportunity mapping",
      ],
    },
    {
      id: "digital-marketing",
      icon: TrendingUp,
      title: "Digital Marketing Campaigns",
      description:
        "Comprehensive digital strategies across social media, search, and content marketing.",
      features: [
        "Social media strategy & management",
        "Search engine optimization",
        "Pay-per-click advertising",
        "Email marketing automation",
      ],
    },
    {
      id: "experimental-marketing",
      icon: Lightbulb,
      title: "Experimental Marketing",
      description:
        "Creative, unconventional marketing approaches to create buzz and engagement.",
      features: [
        "Guerrilla marketing campaigns",
        "Viral content creation",
        "Interactive brand experiences",
        "Community activation events",
      ],
    },
    {
      id: "brand-storytelling",
      icon: BookOpen,
      title: "Brand Storytelling",
      description:
        "Compelling narratives and content that resonate with your target audience.",
      features: [
        "Brand story development",
        "Content strategy & creation",
        "Video production & editing",
        "Thought leadership content",
      ],
    },
    {
      id: "influencer-marketing",
      icon: Heart,
      title: "Community Building",
      description:
        "Foster loyal communities around your brand through authentic engagement strategies.",
      features: [
        "Community strategy development",
        "Engagement program design",
        "Ambassador program setup",
        "Customer retention initiatives",
      ],
    },
  ];

  const p2pServices = [
    {
      id: "merchant-database",
      icon: Database,
      title: "Verified P2P Merchant Database",
      description:
        "Access one of the most comprehensive databases of active P2P merchants across Nigeria, Ghana, Kenya, South Africa, and beyond.",
      features: [
        "Segmented by market, token, and payment rail",
        "Reputation-based merchant verification",
        "Regularly updated merchant data",
        "Multi-country coverage",
      ],
    },
    {
      id: "market-insights",
      icon: BarChart,
      title: "Market Insights & Regulatory Reports",
      description:
        "Stay ahead with detailed insights on trading volumes, token preferences, and payment rails, plus regulatory landscapes.",
      features: [
        "Trading volume analysis",
        "Token and payment rail trends",
        "Country-specific regulatory updates",
        "Actionable market entry insights",
      ],
    },
    {
      id: "partner-matchmaking",
      icon: Handshake,
      title: "Partner Matchmaking Services",
      description:
        "Optional premium service to connect with trusted liquidity partners for seamless market entry.",
      features: [
        "Curated partner introductions",
        "Liquidity provider vetting",
        "Customized partnership strategies",
        "Ongoing support for collaborations",
      ],
    },
    {
      id: "market-access",
      icon: Rocket,
      title: "Strategic Market Access Tool",
      description:
        "Cut entry time into African markets by up to 70% with our strategic tools and expertise.",
      features: [
        "Accelerated market entry planning",
        "Localized strategy development",
        "Cross-border expansion support",
        "Expert consultation",
      ],
    },
  ];
  const toggleDropdown = (serviceId) => {
    setOpenDropdown(openDropdown === serviceId ? null : serviceId);
  };

  const renderGlobalServices = () => (
    <div className="space-y-6">
      {globalServices.map((service) => (
        <motion.div
          key={service.id}
          // variants={fadeInUp}
          className="bg-white rounded-xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <button
            onClick={() => toggleDropdown(service.id)}
            className="w-full p-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-800 mb-1">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm">
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
              <ChevronDown className="w-5 h-5 text-neutral-400" />
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
                <div className="px-6 pb-6 border-t border-neutral-100 bg-neutral-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {service.details.map((detail, index) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-neutral-600 text-sm">
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
  );

  const renderLocalServices = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {localServices.map((service, index) => (
        <motion.div
          key={service.id}
          // variants={fadeInUp}
          className="bg-white p-6 rounded-xl border border-neutral-100 hover:shadow-lg transition-all duration-300 group"
          whileHover={{ y: -5 }}
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
            <service.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 mb-3">
            {service.title}
          </h3>
          <p className="text-neutral-600 text-sm mb-4">{service.description}</p>
          {service.features && (
            <div className="space-y-2">
              {service.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-neutral-600 text-xs">{feature}</span>
                </div>
              ))}
              {service.features.length > 3 && (
                <div className="text-xs text-neutral-500 mt-2">
                  +{service.features.length - 3} more features
                </div>
              )}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderP2PServices = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {p2pServices.map((service, index) => (
        <motion.div
          key={service.id}
          // variants={fadeInUp}
          className="bg-white p-6 rounded-xl border border-neutral-100 hover:shadow-lg transition-all duration-300 group"
          whileHover={{ y: -5 }}
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
            <service.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 mb-3">
            {service.title}
          </h3>
          <p className="text-neutral-600 text-sm mb-4">{service.description}</p>
          {service.features && (
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-neutral-600 text-xs">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderServicesContent = () => {
    switch (activeCategory) {
      case "global":
        return renderGlobalServices();
      case "local":
        return renderLocalServices();
      case "p2p":
        return renderP2PServices();
      default:
        return renderGlobalServices();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
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
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed mb-8">
              Comprehensive Go-To-Market solutions designed to accelerate your
              success in Africa's dynamic digital economy.
            </p>

            {/* Quick Navigation */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 text-sm"
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.title}</span>
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Category Tabs */}
      <section className="py-8 bg-white border-b border-neutral-100 sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-2">
                    <category.icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-sm font-bold">{category.title}</div>
                      <div className="text-xs opacity-80">
                        {category.subtitle}
                      </div>
                    </div>
                  </div>
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-lg -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Services Content */}
      <section className="py-20 bg-neutral-50 min-h-[60vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-6xl mx-auto"
          >
            {/* Category Header */}
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                {categories.find((cat) => cat.id === activeCategory)?.icon && (
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    {(() => {
                      const IconComponent = categories.find(
                        (cat) => cat.id === activeCategory
                      )?.icon;
                      return IconComponent ? (
                        <IconComponent className="w-6 h-6 text-primary" />
                      ) : null;
                    })()}
                  </div>
                )}
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800">
                  {categories.find((cat) => cat.id === activeCategory)?.title}{" "}
                  Services
                </h2>
              </div>

              {activeCategory === "local" && (
                <div className="bg-white p-6 rounded-xl border border-neutral-100 max-w-4xl mx-auto">
                  <p className="text-lg text-neutral-600 mb-4">
                    We help local brands in Africa position, market, and scale
                    with cutting-edge strategies tailored to today's
                    digital-first economy.
                  </p>
                  <p className="text-neutral-600 text-sm">
                    Our team blends digital strategy, experimental marketing,
                    and market positioning to help your brand build visibility,
                    engage audiences, and test innovative growth strategies.
                  </p>
                </div>
              )}

              {activeCategory === "p2p" && (
                <div className="bg-white p-6 rounded-xl border border-neutral-100 max-w-4xl mx-auto">
                  <p className="text-lg text-neutral-600">
                    Exclusive access to Africa’s leading P2P merchants, helping
                    global brands scale faster with trusted local liquidity
                    partners.
                  </p>
                </div>
              )}

              {activeCategory === "global" && (
                <div className="bg-white p-6 rounded-xl border border-neutral-100 max-w-4xl mx-auto">
                  <p className="text-lg text-neutral-600">
                    Strategic pillars designed to help international companies
                    successfully enter and scale in African markets.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Services Content */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {renderServicesContent()}
            </motion.div>

            {/* Category-specific CTA */}
            <motion.div variants={fadeInUp} className="text-center mt-16">
              <div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm">
                {activeCategory === "global" && (
                  <>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                      Ready to Enter African Markets?
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      Let's discuss your expansion strategy and create a
                      tailored roadmap for success.
                    </p>
                  </>
                )}
                {activeCategory === "local" && (
                  <>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                      Ready to Scale Your Local Brand?
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      Transform your business with innovative marketing
                      strategies that resonate with African audiences.
                    </p>
                  </>
                )}
                {activeCategory === "p2p" && (
                  <>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                      Optimize Your P2P Operations?
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      Enhance your cryptocurrency and P2P trading platform with
                      our specialized solutions.
                    </p>
                  </>
                )}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-secondary text-black rounded-full font-semibold hover:bg-secondary/90 transition-all duration-200"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-neutral-800 mb-8"
            >
              Why Choose Our Services?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                variants={fadeInUp}
                className="p-6 bg-neutral-50 rounded-lg"
              >
                <Target className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-800 mb-2">
                  Targeted Approach
                </h3>
                <p className="text-neutral-600 text-sm">
                  Custom strategies for your specific market and goals
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-6 bg-neutral-50 rounded-lg"
              >
                <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-800 mb-2">
                  Fast Execution
                </h3>
                <p className="text-neutral-600 text-sm">
                  Rapid deployment with measurable results
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-6 bg-neutral-50 rounded-lg"
              >
                <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-neutral-800 mb-2">
                  Local Expertise
                </h3>
                <p className="text-neutral-600 text-sm">
                  Deep understanding of African markets and culture
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
