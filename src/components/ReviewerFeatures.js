import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Ask, update, commit. All in one place.",
    description:
      "Chat with Graphite to get context on code changes, fix issues, resolve CI failures, and update your PRs, right in your review flow.",
    image: "https://via.placeholder.com/400x300?text=Feature+1",
    link: "https://example.com/feature1",
  },
  {
    title: "Save hours on every pull request",
    description:
      "Get immediate, actionable feedback on every pull request with Graphite’s codebase-aware AI.",
    image: "https://via.placeholder.com/400x300?text=Feature+2",
    link: "https://example.com/feature2",
  },
  {
    title: "Turn comments into suggested changes",
    description:
      "Graphite generates suggested code changes for comments, helping you to resolve threads faster.",
    image: "https://via.placeholder.com/400x300?text=Feature+3",
    link: "https://example.com/feature3",
  },
  {
    title: "Detailed PR descriptions in seconds",
    description: "Explain every change to your reviewers with one click.",
    image: "https://via.placeholder.com/400x300?text=Feature+4",
    link: "https://example.com/feature4",
  },
  {
    title: "From failures to fixes",
    description: "Graphite summarizes and generates fixes for your failing CI.",
    image: "https://via.placeholder.com/400x300?text=Feature+5",
    link: "https://example.com/feature5",
  },
];

export default function ReviewerFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  // IntersectionObserver to update active index
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll the right panel when scrolling anywhere in the section
  useEffect(() => {
    const section = containerRef.current?.parentElement;
    const container = containerRef.current;
    if (!section || !container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollBy({ top: e.deltaY, behavior: "smooth" });
    };

    section.addEventListener("wheel", handleWheel);
    return () => section.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 rounded-4xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left sticky panel */}
        <div className="relative">
          <div className="sticky top-32 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  {features[activeIndex].title}
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  {features[activeIndex].description}
                </p>
                <a
                  href={features[activeIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Explore Feature
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right scrollable panel */}
        <div
          ref={containerRef}
          className="space-y-12 h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gradient scrollbar-track-gray-800 rounded-xl p-4"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              data-index={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              className="h-[400px] flex flex-col items-center justify-center"
            >
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-[300px] h-[300px] object-cover rounded-2xl shadow-xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeIndex === i ? 1 : 0.5,
                  scale: activeIndex === i ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Cool gradient scrollbar styling */}
      <style>
        {`
    .scrollbar-thumb-gradient::-webkit-scrollbar {
      width: 8px;
    }
    .scrollbar-thumb-gradient::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #ff7e5f, #feb47b);
      border-radius: 9999px;
      transition: background 0.3s;
    }
    .scrollbar-thumb-gradient::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, #feb47b, #ff7e5f);
    }
    .scrollbar-thumb-gradient::-webkit-scrollbar-track {
      background-color: #1f2937;
      border-radius: 9999px;
    }
  `}
      </style>
    </section>
  );
}
