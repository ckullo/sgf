import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaUsers, FaAward, FaHandshake } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: <FaAward className="text-4xl text-primary" />,
      title: "Keunggulan Bersertifikat",
      description: "Vendor bersertifikat LKPP dengan rekam jejak terbukti"
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Tim Ahli",
      description: "Tim profesional dengan pengalaman luas"
    },
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Mitra Terpercaya",
      description: "Membangun kemitraan jangka panjang dengan klien"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang PT Sano Gratia Farma</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Memimpin solusi pengadaan pemerintah dengan integritas dan keunggulan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6">Cerita Kami</h3>
            <p className="text-gray-600 mb-4">
              PT Sano Gratia Farma telah berada di garis depan layanan pengadaan pemerintah 
              sejak didirikan. Kami mengkhususkan diri dalam menyediakan solusi komprehensif 
              yang memenuhi persyaratan LKPP dan membantu bisnis menavigasi lanskap kompleks 
              tender pemerintah.
            </p>
            <p className="text-gray-600 mb-6">
              Komitmen kami terhadap transparansi, kualitas, dan kepuasan pelanggan telah menjadikan kami 
              mitra terpercaya bagi berbagai instansi pemerintah dan klien sektor swasta 
              di seluruh Indonesia.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <FaCheckCircle className="text-primary mr-3" />
                <span>Lebih dari 10 tahun pengalaman industri</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-primary mr-3" />
                <span>Berhasil menyelesaikan 500+ proyek</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-primary mr-3" />
                <span>Melayani klien di seluruh Indonesia</span>
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
            <h3 className="text-2xl font-semibold mb-4">Visi Kami</h3>
            <p className="text-gray-600">
              Menjadi penyedia terkemuka solusi pengadaan pemerintah di Indonesia, 
              menetapkan standar keunggulan, integritas, dan inovasi dalam industri.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Misi Kami</h3>
            <p className="text-gray-600">
              Memberikan layanan pengadaan luar biasa yang memberdayakan bisnis untuk berhasil 
              dalam tender pemerintah sambil mempertahankan standar kepatuhan dan etika tertinggi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About