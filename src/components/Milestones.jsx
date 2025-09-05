import React from "react";
import { motion } from "framer-motion";
import { milestones } from "../data/content";

const Milestones = () => {
  return (
    <section
      id="milestones"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Perjalanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dari awal yang sederhana hingga menjadi nama terpercaya di industri
            farmasi
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-200 via-green-400 to-green-600 hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`bg-white p-6 rounded-xl shadow-lg border-2 border-green-100 ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex items-center justify-center w-12 h-12">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center bg-green-100 px-6 py-3 rounded-full">
            <span className="text-green-700 font-semibold">
              Dan perjalanan ini terus berlanjut...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Milestones;
