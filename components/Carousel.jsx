"use client";

import { motion } from "framer-motion";

const Carousel = ({ items, title }) => {
  return (
    <div className="py-8">
      <h3 className="text-xl font-semibold text-neutral-400 text-center mb-8">
        {title}
      </h3>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-8"
          animate={{
            x: [0, -100 * items.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate items for seamless loop */}
          {[...items, ...items].map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-36 h-24 bg-white rounded-lg border border-neutral-100 shadow-sm flex items-center justify-center p-4"
              whileHover={{ scale: 1.05 }}
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <span className="text-neutral-300 font-medium text-sm text-center">
                  {item.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
