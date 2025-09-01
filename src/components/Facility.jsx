import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaIndustry, FaMapMarkerAlt } from 'react-icons/fa'
import { manufacturingFacility } from '../data/content'
import image1 from '../../sgf/1.jpg'
import image2 from '../../sgf/2.jpg'
import image3 from '../../sgf/3.jpg'
import image4 from '../../sgf/4.jpg'
import image5 from '../../sgf/5.jpg'

const facilityImages = [image1, image2, image3, image4, image5]

const Facility = () => {
  return (
    <section id="facility" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Keunggulan Manufaktur
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {manufacturingFacility.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {manufacturingFacility.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <FaIndustry className="text-4xl text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Fitur Fasilitas</h3>
              </div>
              
              <div className="space-y-4">
                {manufacturingFacility.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Lokasi</p>
                    <p className="text-gray-600 text-sm">{manufacturingFacility.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="relative h-48 rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src={facilityImages[item - 1]} 
                  alt={`Fasilitas Produksi ${item}`} 
                  className="w-full h-full object-cover"
                />
                {/* Removed text overlay for cleaner image display */}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Komitmen Terhadap Kualitas Terbaik
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Fasilitas modern kami memastikan setiap produk memenuhi standar kualitas dan keamanan tertinggi
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold">CPOB</div>
                <div className="text-sm opacity-90">Tersertifikasi</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Kontrol Kualitas</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Kepatuhan</div>
              </div>
              <div>
                <div className="text-3xl font-bold">ISO</div>
                <div className="text-sm opacity-90">Standar</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Facility