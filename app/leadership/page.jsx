"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Globe, Award, Users, Target, Heart } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const LeadershipPage = () => {
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

  const teamMembers = [
    {
      name: "Sarah Adebayo",
      role: "GTM Strategist",
      bio: "Expert in campaign design with 8+ years in fintech. Led successful market entries for 3 major fintech companies across West Africa.",
      image:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      skills: ["Market Analysis", "Strategic Planning", "Campaign Development"],
    },
    {
      name: "Kwame Asante",
      role: "Partnerships Manager",
      bio: "Strategic partnerships specialist with extensive network across African tech ecosystem. Former business development lead at major telecommunications company.",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
      skills: [
        "Business Development",
        "Relationship Building",
        "Deal Structuring",
      ],
    },
    {
      name: "Amina Hassan",
      role: "Local Market Lead - East Africa",
      bio: "Deep expertise in East African markets with focus on mobile money integration and regulatory compliance. Fluent in Swahili and English.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      skills: ["Market Research", "Regulatory Affairs", "Local Networks"],
    },
    {
      name: "Tunde Ogundimu",
      role: "Local Market Lead - West Africa",
      bio: "Specializes in Nigerian and Ghanaian markets with proven track record in crypto and fintech adoption strategies. Former fintech startup founder.",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      skills: ["Startup Ecosystem", "Crypto Adoption", "Market Penetration"],
    },
    {
      name: "Fatima Al-Rashid",
      role: "Creative Lead",
      bio: "Award-winning creative director with expertise in Web3 and blockchain visual communication. Led brand campaigns for global tech companies.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      skills: ["Brand Design", "Digital Creative", "Campaign Strategy"],
    },
  ];

  const ceoMessage = `Welcome to AGTM Partner. As the founder, I'm passionate about bridging global innovation with Africa's digital boom. 

Having worked at the forefront of Web3 adoption across the continent, I've witnessed firsthand the immense potential that exists when global technology meets local market understanding. My journey through leading partnerships at Ledger, driving growth strategies at Bitget, and facilitating market entry for BoundlessPay has taught me that success in Africa isn't just about having great technology – it's about building authentic relationships, understanding cultural nuances, and creating solutions that truly serve local needs.

Africa represents the next frontier of digital transformation. With over 1.4 billion people increasingly connected through mobile technology, the continent offers unprecedented opportunities for Web3 and fintech innovation. However, navigating this landscape requires more than traditional market entry strategies. It demands deep local insights, cultural sensitivity, and long-term commitment to community development.

At AGTM Partner, we don't just help companies enter markets – we help them become part of the African story. We believe in sustainable growth that benefits not just our clients, but the communities they serve. Our approach combines global best practices with authentic local expertise, ensuring that every partnership we facilitate creates lasting value for all stakeholders.

The future of global finance and technology will be written in Africa, and I'm excited to help international companies be part of that narrative while supporting local talent and innovation ecosystems across the continent.`;

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
              Our <span className="text-gradient">Leadership</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
              Meet the experienced team driving Africa&apos;s digital
              transformation through strategic partnerships and market
              expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEO Message */}
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
                Message from Our CEO
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <motion.div variants={fadeInUp} className="lg:col-span-1">
                <div className="relative">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                      alt="Godspower Effiong - CEO"
                      width={400}
                      height={500}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/30 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold text-neutral-400 mb-2">
                    Godspower Effiong
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    Founder & CEO
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <motion.a
                      href="#"
                      className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-300 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-300 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Globe size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="lg:col-span-2">
                <div className="space-y-6">
                  {ceoMessage.split("\n\n").map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-neutral-300 leading-relaxed text-lg"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-neutral-100"
                >
                  <h4 className="text-lg font-semibold text-neutral-400 mb-4">
                    Experience Highlights
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-neutral-300">
                        Former Growth & Partnerships Lead at Ledger
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-neutral-300">
                        Strategic Advisor at Bitget for African Markets
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-neutral-300">
                        Led market entry strategy for BoundlessPay
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-neutral-300">
                        Speaker at 15+ blockchain conferences across Africa
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
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
                Our Team
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                A diverse team of experts with deep knowledge of African
                markets, Web3 technologies, and strategic partnerships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-400 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-neutral-400">
                        Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.a
                      href="#"
                      className="inline-flex items-center justify-center w-10 h-10 bg-neutral-100 rounded-full text-neutral-300 hover:text-primary hover:bg-primary/10 transition-all duration-200 mt-4"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={18} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values in Leadership */}
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
                Leadership Philosophy
              </h2>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 rounded-2xl border border-neutral-100">
                <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                  Our leadership approach is built on the foundation of
                  authentic relationships, deep market understanding, and
                  unwavering commitment to sustainable growth that benefits all
                  stakeholders.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  We believe in leading by example, fostering innovation through
                  collaboration, and creating opportunities that empower both
                  our clients and the communities they serve across Africa.
                </p>
              </div>
            </motion.div>
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
              Ready to Work with Our Team?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-neutral-300 mb-8"
            >
              Let&apos;s discuss how our experienced leadership can guide your
              success in Africa&apos;s dynamic digital markets.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-secondary text-neutral-400 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all duration-200 neon-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect with Us
                <Heart className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadershipPage;
