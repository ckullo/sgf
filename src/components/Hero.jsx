import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaAward, FaShieldAlt, FaFlask } from 'react-icons/fa'
import { companyInfo, certifications } from '../data/content'

const Hero = () => {
  const highlights = [
    { icon: <FaShieldAlt />, text: "BPOM & Halal MUI Certified" },
    { icon: <FaAward />, text: "CPOB Standards" },
    { icon: <FaFlask />, text: "Quality Healthcare Products" }
  ]

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6"
            >
              🏥 Trusted Since 2017
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                PT Sano Gratia Farma
              </span>
            </h1>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {companyInfo.tagline}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {companyInfo.description}
            </p>
            
            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <span className="text-green-600 mr-3 text-xl">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#products" 
                className="btn-primary inline-flex items-center justify-center group bg-green-600 hover:bg-green-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Products
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 text-center inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20 blur-2xl"
              />
              
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start p-4 bg-gradient-to-r from-gray-50 to-transparent rounded-lg border-l-4 border-green-500"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-2xl mr-3">{cert.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                        <p className="text-sm text-gray-600">{cert.description}</p>
                        {cert.certificateNumber && (
                          <p className="text-xs text-gray-500 mt-1">
                            No: {cert.certificateNumber}
                          </p>
                        )}
                        {cert.verifyUrl && (
                          <a 
                            href={cert.verifyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline mt-1 inline-block"
                          >
                            Verify →
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">37+</div>
                      <div className="text-xs text-gray-600">Employees</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">22+</div>
                      <div className="text-xs text-gray-600">Distributors</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">3</div>
                      <div className="text-xs text-gray-600">Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero