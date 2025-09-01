import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaUsers, FaAward, FaHandshake } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: <FaAward className="text-4xl text-primary" />,
      title: "Certified Excellence",
      description: "LKPP certified vendor with proven track record"
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Expert Team",
      description: "Professional team with extensive experience"
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Trusted Partner",
      description: "Building long-term partnerships with clients"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About SGF Indonesia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in government procurement solutions with integrity and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4">
              SGF Indonesia has been at the forefront of government procurement services 
              since our establishment. We specialize in providing comprehensive solutions 
              that meet LKPP requirements and help businesses navigate the complex landscape 
              of government tenders.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to transparency, quality, and customer satisfaction has made us 
              a trusted partner for numerous government agencies and private sector clients 
              across Indonesia.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <FaCheckCircle className="text-primary mr-3" />
                <span>Over 10 years of industry experience</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-primary mr-3" />
                <span>Successfully completed 500+ projects</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-primary mr-3" />
                <span>Serving clients nationwide</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <div className="mr-4">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of government procurement solutions in Indonesia, 
              setting the standard for excellence, integrity, and innovation in the industry.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional procurement services that empower businesses to succeed 
              in government tenders while maintaining the highest standards of compliance and ethics.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About