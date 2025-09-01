import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ahmad Rizki",
      position: "Chief Executive Officer",
      image: "https://via.placeholder.com/300x300",
      description: "20+ years of experience in government procurement",
      linkedin: "#",
      email: "ceo@sgfindonesia.com"
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      position: "Chief Operating Officer",
      image: "https://via.placeholder.com/300x300",
      description: "Expert in operations and project management",
      linkedin: "#",
      email: "coo@sgfindonesia.com"
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "Head of Legal",
      image: "https://via.placeholder.com/300x300",
      description: "Specializes in procurement law and compliance",
      linkedin: "#",
      email: "legal@sgfindonesia.com"
    },
    {
      id: 4,
      name: "Dewi Kartika",
      position: "Head of Business Development",
      image: "https://via.placeholder.com/300x300",
      description: "Strategic partnerships and client relations",
      linkedin: "#",
      email: "bd@sgfindonesia.com"
    },
    {
      id: 5,
      name: "Rahmat Hidayat",
      position: "Technical Director",
      image: "https://via.placeholder.com/300x300",
      description: "Technical expertise in infrastructure projects",
      linkedin: "#",
      email: "technical@sgfindonesia.com"
    },
    {
      id: 6,
      name: "Maya Anggraini",
      position: "Finance Director",
      image: "https://via.placeholder.com/300x300",
      description: "Financial planning and risk management",
      linkedin: "#",
      email: "finance@sgfindonesia.com"
    }
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts driving our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <div className="text-white text-6xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 p-8 rounded-lg text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Join Our Team</h3>
          <p className="text-gray-600 mb-6">
            We're always looking for talented professionals to join our growing team
          </p>
          <a
            href="#contact"
            className="inline-block btn-primary"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Team