import React from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Clients = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ir. Bambang Sutrisno",
      position: "Director of Procurement",
      organization: "Ministry of Public Works",
      content: "SGF Indonesia has been instrumental in streamlining our procurement process. Their expertise and professionalism are unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "Dr. Ratna Wijaya",
      position: "Head of Administration",
      organization: "Regional Government Jakarta",
      content: "Working with SGF has transformed how we handle tenders. Their attention to detail and compliance knowledge is exceptional.",
      rating: 5
    },
    {
      id: 3,
      name: "Hendra Kusuma",
      position: "Procurement Manager",
      organization: "State-Owned Enterprise",
      content: "SGF's team provided excellent support throughout our project. They made complex procurement requirements simple to understand.",
      rating: 5
    }
  ]

  const clients = [
    "Ministry of Finance",
    "Ministry of Health",
    "Ministry of Education",
    "Regional Government DKI Jakarta",
    "Regional Government West Java",
    "Regional Government East Java",
    "PT Pertamina",
    "PT PLN",
    "PT Telkom Indonesia",
    "Bank Indonesia",
    "Various State Universities",
    "Regional Hospitals"
  ]

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients & Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading government agencies and organizations across Indonesia
          </p>
        </motion.div>

        {/* Client Logos/Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Some of Our Valued Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <p className="font-medium text-gray-700">{client}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <FaQuoteLeft className="text-3xl text-primary mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                  <p className="text-sm text-primary">{testimonial.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-accent text-white p-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p>Client Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p>Repeat Business Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p>Compliance Success Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients