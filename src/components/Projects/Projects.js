import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../utils/projects";
import { useNavigate } from "react-router";

export function Projects() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-50 w-full py-24 bg-gray-50">
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_60%)]"></div>
      </div>

      {/* Gradient blob */}
      <div className="absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0 bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl z-10"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-14 text-center"
        >
          Completed Power Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden border border-gray-200 transition duration-300 relative z-10"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={project.imageUrls[0]}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-gray-900 font-semibold mb-1">Issue:</h4>
                  <p className="text-gray-600 text-sm">{project.issue}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-gray-900 font-semibold mb-1">
                    Solution:
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {project.solvingMeasure}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-gray-900 font-semibold mb-1">
                    Conclusion:
                  </h4>
                  <p className="text-gray-600 text-sm">{project.conclusion}</p>
                </div>

                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="mt-4 px-6 py-3 rounded-full bg-black text-white font-medium text-sm shadow hover:scale-[1.03] transition"
                >
                  View Full Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
