import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBuilding, FaHospital, FaGraduationCap, FaIndustry, FaRoad, FaLaptop } from 'react-icons/fa'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Government Office Complex",
      category: "government",
      icon: <FaBuilding />,
      description: "Supply and installation for new government administrative building",
      value: "IDR 15 Billion",
      year: "2023"
    },
    {
      id: 2,
      title: "Regional Hospital Equipment",
      category: "healthcare",
      icon: <FaHospital />,
      description: "Medical equipment procurement for 5 regional hospitals",
      value: "IDR 25 Billion",
      year: "2023"
    },
    {
      id: 3,
      title: "University IT Infrastructure",
      category: "education",
      icon: <FaGraduationCap />,
      description: "Complete IT infrastructure for state university",
      value: "IDR 8 Billion",
      year: "2022"
    },
    {
      id: 4,
      title: "Industrial Zone Development",
      category: "industrial",
      icon: <FaIndustry />,
      description: "Infrastructure development for industrial zone",
      value: "IDR 45 Billion",
      year: "2022"
    },
    {
      id: 5,
      title: "Highway Construction Materials",
      category: "infrastructure",
      icon: <FaRoad />,
      description: "Material supply for national highway project",
      value: "IDR 30 Billion",
      year: "2023"
    },
    {
      id: 6,
      title: "E-Government Platform",
      category: "technology",
      icon: <FaLaptop />,
      description: "Digital transformation platform for government services",
      value: "IDR 12 Billion",
      year: "2023"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'government', name: 'Government' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'education', name: 'Education' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'technology', name: 'Technology' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our successful projects across various sectors
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                <div className="text-4xl mb-3">{project.icon}</div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Project Value</p>
                    <p className="font-semibold text-primary">{project.value}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-semibold">{project.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">500+</div>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">200+</div>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">10+</div>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">34</div>
            <p className="text-gray-600 mt-2">Provinces Covered</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio