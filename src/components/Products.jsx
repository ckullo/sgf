import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaInfoCircle, FaPills, FaFlask, FaLeaf, FaExclamationCircle } from 'react-icons/fa'
import { products } from '../data/content'
import { FaTriangleExclamation } from 'react-icons/fa6'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Obat Keras': return <FaPills className="text-red-500" />
      case 'Obat Bebas Terbatas': return <FaPills className="text-blue-500" />
      case 'Obat Bebas': return <FaLeaf className="text-green-500" />
      case 'Obat Kuasi': return <FaPills className="text-green-500" />
      default: return <FaPills className="text-gray-500" />
    }
  }

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Obat Keras': return 'bg-red-100 text-red-700 border-red-300'
      case 'Obat Bebas Terbatas': return 'bg-blue-100 text-blue-700 border-blue-300'
      case 'Obat Bebas': return 'bg-green-100 text-green-700 border-green-300'
      case 'Obat Kuasi': return 'bg-green-100 text-green-700 border-green-300'
      default: return 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Produk Kami
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Solusi Kesehatan Berkualitas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Produk-produk berkualitas tinggi yang telah terdaftar BPOM dan bersertifikat Halal MUI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-48 bg-gray-50 flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-h-full w-auto object-contain"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(product.category)}`}>
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  {getCategoryIcon(product.category)}
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500 w-20">Ukuran:</span>
                    <span className="font-semibold">{product.size}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500 w-20">Reg No:</span>
                    <span className="font-semibold text-green-600">{product.regNumber}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500 w-20">Harga (HET):</span>
                    <span className="font-bold text-lg text-blue-600">{product.price}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-lg font-semibold flex items-center justify-center"
                >
                  <FaInfoCircle className="mr-2" />
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">{selectedProduct.name}</h3>
                    <div className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold border ${getCategoryColor(selectedProduct.category)}`}>
                      {selectedProduct.category}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-400 hover:text-gray-600 text-3xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4 sticky top-0">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="max-h-80 w-auto object-contain"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800 mb-3">Informasi Produk</h4>
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="text-gray-500 w-32">Reg. No:</span>
                          <span className="font-semibold">{selectedProduct.regNumber}</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-32">Ukuran:</span>
                          <span className="font-semibold">{selectedProduct.size}</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-32">Kemasan:</span>
                          <span className="font-semibold">{selectedProduct.packaging}</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-500 w-32">Harga (HET):</span>
                          <span className="font-bold text-xl text-blue-600">{selectedProduct.price}</span>
                        </div>
                      </div>
                    </div>

                    {selectedProduct.composition && (
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-lg text-gray-800 mb-3">Komposisi</h4>
                        <ul className="space-y-2">
                          {selectedProduct.composition.map((comp, idx) => (
                            <li key={idx} className="flex items-start">
                              <FaFlask className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-600">{comp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedProduct.indications && (
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-lg text-gray-800 mb-3">Indikasi</h4>
                        <ul className="space-y-2">
                          {selectedProduct.indications.map((indication, idx) => (
                            <li key={idx} className="flex items-start">
                              <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{indication}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedProduct.contra_indications && (
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-lg text-gray-800 mb-3">Kontraindikasi</h4>
                        <ul className="space-y-2">
                          {selectedProduct.contra_indications.map((contra, idx) => (
                            <li key={idx} className="flex items-start">
                              <FaExclamationCircle className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{contra}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {selectedProduct.features && (
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-lg text-gray-800 mb-3">Keunggulan</h4>
                        <ul className="space-y-2">
                          {selectedProduct.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {selectedProduct.pharmacology && (
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-lg text-gray-800 mb-3">Farmakologi</h4>
                        <span className="text-gray-600">{selectedProduct.pharmacology}</span>
                      </div>
                    )}
                    
                    {selectedProduct.sideEffects && (
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-lg text-gray-800 mb-3">Efek Samping</h4>
                        <ul className="space-y-2">
                          {selectedProduct.sideEffects.map((sideEffects, idx) => (
                            <li key={idx} className="flex items-start">
                              <FaExclamationCircle className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{sideEffects}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>Catatan:</strong> Semua produk kami terdaftar di BPOM dan bersertifikat Halal. 
                    Verifikasi BPOM <a href="https://cekbpom.pom.go.id" target="_blank" rel="noopener noreferrer" className="underline">cekbpom.pom.go.id</a>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Products