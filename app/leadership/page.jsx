"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Globe, Award, Users, Target, Heart } from "lucide-react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const LeadershipPage = () => {
  const [expandedMember, setExpandedMember] = useState(null);

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
      name: "Victor Solomon",
      role: "GTM Strategist",
      bio: "Crypto market analyst with deep expertise in blockchain, stablecoins, and Web3 adoption. Helps fintech brands expand into African markets through strategic insights and regulatory understanding.",
      image: "/victor.jpg",
      skills: ["Market Analysis", "Strategic Planning", "Campaign Development"],
      linkedin: "https://www.linkedin.com/in/victor-solomon-profile/",
    },
    {
      name: "Keziah Aggie Effiong",
      role: "West Africa Lead",
      bio: "Crypto market analyst with deep expertise in blockchain, stablecoins, and Web3 adoption. Helps fintech brands expand into African markets through strategic insights and regulatory understanding.",
      image: "/kezzie.jpg",
      skills: ["Market Analysis", "Strategic Planning", "Campaign Development"],
      linkedin: "https://www.linkedin.com/in/keziah-aggie-effiong-profile/",
    },
    {
      name: "Noah Azube",
      role: "Partnerships Manager",
      bio: "Web3 Marketer | DevRel | Software Developer | Community Builder. A dynamic force at the intersection of tech and community. I connect Web3 innovation with real human impact—coding by day, scaling communities by night, and bridging devs with the tools they need to thrive. Whether it's building decentralized solutions or growing ecosystems, I get things done. With great passion for African growth. Hobbies: Planetary researcher (ever wondered why the planet is green?), travelling, and chasing knowledge with new perspectives. Let’s build the future—together.",
      image: "/noah.jpg",
      skills: [
        "Business Development",
        "Relationship Building",
        "Deal Structuring",
      ],
      linkedin: "https://www.linkedin.com/in/noah-azube-profile/",
    },
    {
      name: "Jeffery Ilori",
      role: "Partnerships Manager",
      bio: "Jeff is a crypto trailblazer specializing in industry partnerships and marketing for Web3 innovations. He is experienced in client relations, and possesses a track record of forging strategic partnerships that accelerate market share and brand visibility in the crypto landscape. He is dedicated to guiding foreign brands into Africa’s explosive crypto ecosystem and as a result, unlock opportunities through local regulatory navigation, cultural insights about the African market and savvy blockchain strategies. He aspires to drive economic empowerment across the continent via decentralized technology.",
      image: "/jeff.jpg",
      skills: [
        "Business Development",
        "Relationship Building",
        "Deal Structuring",
      ],
      linkedin: "https://www.linkedin.com/in/jeffrey-ilori-256a47b1",
    },
    {
      name: "Edima Essien",
      role: "Customer Success Manager",
      bio: "With a first-class degree in advertising and marketing, Edima ensures client satisfaction by delivering tailored solutions for Web3 and fintech brands entering African markets. Her expertise in customer engagement and market insights drives successful onboarding and long-term partnerships.",
      image: "/edima.jpg",
      skills: [
        "Customer Engagement",
        "Client Onboarding",
        "Market Insights",
        "Relationship Management",
      ],
      linkedin: "https://www.linkedin.com/in/edima-essien-profile/",
    },
    {
      name: "Mano Terah",
      role: "Social Media Manager",
      bio: "Mano crafts compelling social media strategies to amplify brand presence in Africa’s digital landscape. Specializing in Web3 and fintech, he drives engagement and builds communities through creative campaigns and localized content.",
      image: "/mano.jpg",
      skills: [
        "Social Media Strategy",
        "Content Creation",
        "Community Engagement",
        "Brand Amplification",
      ],
      linkedin: "https://www.linkedin.com/in/mano-terah-profile/",
    },
  ];
  const ceoQualifications =
    "Business Development & GTM Strategist | Scaling Ecosystems | Partnerships & Market Expansion";

  const ceoMessage = `
I’m God’spower Effiong, Founder & CEO of AGTM Partner.

With over 7 years of experience helping leading Web3, fintech, and AI brands scale across Africa, I specialize in go-to-market strategy, business development, partnerships, and operations. My career has been about one thing: bridging global innovation with local opportunity.

I’ve had the privilege of working with some of the world’s top digital and blockchain brands, including Ledger, Bitget, NMKR, Minutes Network, NumericoAI, and BoundlessPay. From brokering landmark deals to driving user adoption at scale, my focus has always been on helping companies enter Africa with confidence and grow sustainably.

At Ledger, I led partnerships and wallet integration initiatives with both local and global exchanges, secured enterprise sales, and brokered the Ledger x Jumia Nigeria deal, making hardware wallets more accessible to everyday Africans. At Bitget, I served as Head of P2P Africa, scaling daily trading volumes to $1M+, while opening 5 new markets through merchant onboarding, payment solutions, and targeted campaigns. At BoundlessPay, I shaped the company’s go-to-market roadmap as COO, improving product adoption and leading cross-functional operations.

Beyond product launches and partnerships, I’ve been deeply involved in ecosystem building, scaling communities by 6x at NumericoAI, driving Web3 education for 5,000+ Nigerian youths through NYSC, and sealing landmark partnerships such as NMKR x African Football Federation. I’ve also been trusted to represent these brands on stage as a speaker at 15+ blockchain conferences across Nigeria, Kenya, Ghana, and South Africa.

At AGTM Partner, my mission is simple: to help Web3, AI, and digital brands launch, scale, and thrive in Africa by providing the strategy, partnerships, and execution needed to succeed in one of the most dynamic markets in the world.
`;

  const toggleBio = (index) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  const truncateBio = (bio, maxLength = 200) => {
    if (bio.length <= maxLength) return bio;
    return bio.slice(0, maxLength) + "...";
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
                      src="/leader.jpg"
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
                      href="https://www.linkedin.com/in/cowboigp/"
                      className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-300 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="lg:col-span-2">
                <div className="space-y-6">
                  <p className="text-xl font-extrabold text-neutral-400 mb-4">
                    {ceoQualifications}
                  </p>
                  <p className="text-neutral-300 leading-relaxed text-lg">
                    {expandedMember === "ceo"
                      ? ceoMessage
                      : truncateBio(ceoMessage)}
                  </p>
                  {ceoMessage.length > 100 && (
                    <motion.button
                      onClick={() => toggleBio("ceo")}
                      className="text-primary font-semibold hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedMember === "ceo" ? "Read Less" : "Read More"}
                    </motion.button>
                  )}
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
                        Ledger – Africa Outreach Manager (Partnerships, Wallet
                        Integrations, Enterprise Sales)
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-neutral-300">
                        Bitget – Head of P2P Africa (Scaled to $1M+ daily
                        volume, expanded into 5 new markets)
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-neutral-300">
                        BoundlessPay – Chief Operating Officer (GTM Strategy,
                        Operations, Partnerships)
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-neutral-300">
                        NMKR – Africa Representative (NFT partnership with
                        African Football Federation, regional brand growth)
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-neutral-300">
                        NumericoAI – Business Development & Community Growth (6x
                        community growth, NYSC Web3 education reaching 5,000+)
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-neutral-300">
                        Minutes Network – Partnerships & Operations (SDK
                        integrations and early-stage GTM support)
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
                      {expandedMember === index
                        ? member.bio
                        : truncateBio(member.bio)}
                    </p>
                    {member.bio.length > 100 && (
                      <motion.button
                        onClick={() => toggleBio(index)}
                        className="text-primary font-semibold hover:underline mb-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedMember === index ? "Read Less" : "Read More"}
                      </motion.button>
                    )}
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
                      href={member.linkedin}
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
