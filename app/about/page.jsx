"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Users,
  Globe,
  Award,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AboutPage = () => {
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

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We conduct business with transparency, honesty, and ethical standards in all our interactions.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We deliver exceptional results through continuous improvement and attention to detail.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We build strong partnerships with clients, communities, and stakeholders for mutual success.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "We embrace new technologies and creative solutions to drive digital transformation.",
    },
    {
      icon: Award,
      title: "Impact",
      description:
        "We create meaningful change that benefits businesses, communities, and Africa's digital economy.",
    },
    {
      icon: Lightbulb,
      title: "Knowledge",
      description:
        "We leverage deep market insights and expertise to guide strategic decisions.",
    },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Local Expertise",
      description:
        "Deep understanding of African markets, regulations, and consumer behavior across multiple countries.",
    },
    {
      icon: Users,
      title: "Proven Network",
      description:
        "Established relationships with key stakeholders, regulators, and industry leaders across the continent.",
    },
    {
      icon: Target,
      title: "Track Record",
      description:
        "Successfully guided global brands like Ledger, Bitget, and BoundlessPay into African markets.",
    },
    {
      icon: Globe,
      title: "Cross-Cultural Bridge",
      description:
        "Unique ability to translate global strategies into locally relevant and culturally appropriate solutions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "Specialized expertise in Web3, blockchain, and fintech sectors with deep technical understanding.",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description:
        "Commitment to sustainable growth that benefits local communities and drives digital inclusion.",
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
              About <span className="text-gradient">AGTM Partner</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
              We are Africa&apos;s leading Go-To-Market agency, bridging the gap
              between global innovation and local market success through
              strategic partnerships and deep cultural understanding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
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
                Our Core Values
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                These fundamental principles guide everything we do and shape
                how we serve our clients and contribute to Africa&apos;s digital
                transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="bg-neutral-50 p-8 rounded-xl border border-neutral-100 hover:shadow-lg transition-all duration-300 text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <value.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-neutral-400 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantages */}
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
                Our Competitive Advantages
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                What sets us apart in the African market and enables us to
                deliver exceptional results for our clients across the
                continent.
              </p>
            </motion.div>

            <div className="space-y-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  variants={fadeInUp}
                  className="bg-white p-6 lg:p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <advantage.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-400 mb-3">
                        <span className="inline-flex items-center">
                          <span className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3">
                            <span className="text-xs font-bold text-neutral-400">
                              {index + 1}
                            </span>
                          </span>
                          {advantage.title}
                        </span>
                      </h3>
                      <p className="text-neutral-300 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Extended */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp} className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-400 mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                    To empower global Web3 and fintech companies to successfully
                    enter and thrive in African markets through strategic
                    partnerships, localized marketing, and deep market insights.
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    We believe in creating sustainable value that benefits not
                    just our clients, but also the local communities and
                    economies we serve. Our approach combines global best
                    practices with local expertise to drive meaningful digital
                    transformation across the continent.
                  </p>
                </div>
              </motion.div>

              {/* Video Section */}
              <motion.div
                variants={fadeInUp}
                className="space-y-8 lg:col-span-2 text-center"
              >
                <div>
                  <h2 className="text-3xl font-bold text-neutral-400 mb-6">
                    Our Story in Motion
                  </h2>
                  <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-8">
                    Watch how AGTM Partner is shaping Africa&apos;s digital
                    future through innovation and collaboration.
                  </p>
                  <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-xl overflow-hidden shadow-lg border border-neutral-100">
                    <video
                      className="w-full h-full object-contain bg-black"
                      src="/about.mov"
                      poster="/about-poster.jpg"
                      controls
                      muted
                      preload="metadata"
                      loading="lazy"
                      playsInline
                    >
                      <source src="/about.mov" type="video/mp4" />
                      Your browser does not support the video tag. Please try
                      viewing in a different browser.
                    </video>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-400 mb-6">
                    Our Vision
                  </h2>
                  <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                    To become Africa&apos;s leading Go-To-Market partner,
                    facilitating the continent&apos;s digital transformation
                    while creating sustainable value for all stakeholders.
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    We envision a future where Africa is recognized as a global
                    hub for digital innovation, where local talent thrives, and
                    where technology serves as a bridge to prosperity for all.
                    Through our work, we&apos;re building that future, one
                    partnership at a time.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
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
              Ready to Partner with Us?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-neutral-300 mb-8"
            >
              Let&apos;s explore how our values and expertise can drive your
              success in Africa&apos;s dynamic digital markets.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-secondary text-neutral-400 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all duration-200 neon-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start the Conversation
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
