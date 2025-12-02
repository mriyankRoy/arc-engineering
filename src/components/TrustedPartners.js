import React from "react";
import { motion } from "framer-motion";
import { partners } from "../utils/partners";

export default function TrustedPartners() {

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
        >
          Trusted Partners & Client References
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg mb-16"
        >
          Powering excellence alongside world-class industry leaders.
        </motion.p>
      </div>

      {/* Edge Fade */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-20" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-20" />

      {/* Row 1 */}
      <div className="relative w-full py-4 mb-6 overflow-hidden">
        <motion.div
          className="flex space-x-14 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <img
              src={partner.logo}
              alt={partner.name}
              key={`row1-${index}`}
              className="h-16 object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="relative w-full py-4 overflow-hidden">
        <motion.div
          className="flex space-x-14 items-center whitespace-nowrap"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <img
              src={partner.logo}
              alt={partner.name}
              key={`row2-${index}`}
              className="h-16 object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
