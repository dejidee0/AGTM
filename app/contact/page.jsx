"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useStore } from "../../store/useStore";
import { supabase } from "../../lib/supabase";

const ContactPage = () => {
  const { contactForm, updateContactForm, resetContactForm } = useStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@agtmpartner.com",
      subtitle: "We respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+234 XXX XXX XXXX",
      subtitle: "Mon-Fri 9AM-6PM WAT",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Lagos, Nigeria",
      subtitle: "Schedule an appointment",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, this would be a 'contacts' table
      const { data, error } = await supabase.from("leads").insert([
        {
          name: contactForm.name,
          company: "Contact Form", // Using company field for form type
          email: contactForm.email,
          message: contactForm.message,
          timestamp: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      resetContactForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    updateContactForm(field, value);
    if (submitStatus) setSubmitStatus(""); // Clear status on new input
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
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed">
              Ready to accelerate your growth in Africa&apos;s digital economy?
              We&apos;d love to hear from you and discuss your objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
                Get in Touch
              </h2>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                Multiple ways to reach us. Choose what works best for you, and
                we&apos;ll get back to you promptly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={fadeInUp}
                  className="text-center p-8 bg-neutral-50 rounded-xl border border-neutral-100 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <info.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-neutral-400 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-2">
                    {info.details}
                  </p>
                  <p className="text-neutral-300 text-sm">{info.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-400 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-neutral-300">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-neutral-300 mb-8">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <motion.button
                      onClick={() => setSubmitStatus("")}
                      className="px-8 py-3 bg-secondary text-neutral-400 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-neutral-400 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={contactForm.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                          placeholder="Your full name"
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-neutral-400 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={contactForm.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                          placeholder="your@email.com"
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-neutral-400 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        value={contactForm.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                        placeholder="Tell us about your project, goals, or any questions you have..."
                        required
                      />
                    </motion.div>

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-2 text-accent"
                      >
                        <AlertCircle size={20} />
                        <span className="text-sm">
                          Something went wrong. Please try again or contact us
                          directly.
                        </span>
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex justify-center"
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center px-8 py-4 bg-secondary text-neutral-400 rounded-full font-semibold text-lg hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 neon-glow"
                        whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-neutral-400 border-t-transparent rounded-full mr-2"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
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
                Let&apos;s Build Something Amazing Together
              </h2>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 rounded-2xl border border-neutral-100">
                <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                  Whether you&apos;re a global company looking to enter African
                  markets or a local business ready to scale, we&apos;re here to
                  help you navigate the opportunities and challenges of
                  Africa&apos;s digital economy.
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Our team is committed to understanding your unique needs and
                  crafting strategies that drive sustainable growth and
                  meaningful impact.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
