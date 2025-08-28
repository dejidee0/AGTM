"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { useStore } from "../store/useStore";
import { supabase } from "../lib/supabase";

const Popup = () => {
  const { isPopupVisible, hidePopup, leadForm, updateLeadForm, resetLeadForm } =
    useStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    // Check if the popup has already been shown in the current session
    const popupShown = sessionStorage.getItem("popupShown");

    if (popupShown) return; // If the popup has been shown, do nothing

    let scrollTimer;
    let loadTimer;

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5 && !isPopupVisible) {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          useStore.getState().showPopup();
          sessionStorage.setItem("popupShown", "true"); // Mark as shown in this session
        }, 1000);
      }
    };

    // Show popup after 5 seconds
    loadTimer = setTimeout(() => {
      if (!isPopupVisible) {
        useStore.getState().showPopup();
        sessionStorage.setItem("popupShown", "true"); // Mark as shown in this session
      }
    }, 5000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
      clearTimeout(loadTimer);
    };
  }, [isPopupVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.from("leads").insert([
        {
          name: leadForm.name,
          company: leadForm.company,
          email: leadForm.email,
          timestamp: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      resetLeadForm();
      setTimeout(() => {
        hidePopup();
        setSubmitStatus("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isPopupVisible && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={hidePopup}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative border-2 border-primary/20"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={hidePopup}
              className="absolute top-4 right-4 text-neutral-300 hover:text-neutral-400 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Download className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold text-neutral-400 mb-2">
                Free Market Insights
              </h3>
              <p className="text-neutral-300 text-sm">
                Download our exclusive African Digital Economy Report
              </p>
            </div>

            {submitStatus === "success" ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Thank you!
                </h4>
                <p className="text-neutral-300 mb-4">
                  Your download will start shortly.
                </p>
                <a
                  href="/downloads/report.pdf"
                  className="inline-flex items-center px-4 py-2 bg-secondary text-neutral-400 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                >
                  <Download size={16} className="mr-2" />
                  Download Report
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={leadForm.name}
                    onChange={(e) => updateLeadForm("name", e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={leadForm.company}
                    onChange={(e) => updateLeadForm("company", e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={leadForm.email}
                    onChange={(e) => updateLeadForm("email", e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                </div>

                {submitStatus === "error" && (
                  <p className="text-accent text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Submitting..." : "Download Free Report"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
