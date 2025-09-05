import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaIndustry,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import { manufacturingFacility } from "../data/content";
import image1 from "../../sgf/1.jpg";
import image2 from "../../sgf/2.jpg";
import image3 from "../../sgf/3.jpg";
import image4 from "../../sgf/4.jpg";
import image5 from "../../sgf/5.jpg";
import factoryImage from "../../sgf/pabrik.png";

const facilityImages = [image1, image2, image3, image4, image5];
const AUTOPLAY_INTERVAL = 5000; // 5 seconds

const Facility = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const setSlide = (newIndex, newDirection) => {
    if (newIndex < 0) {
      newIndex = facilityImages.length - 1;
    } else if (newIndex >= facilityImages.length) {
      newIndex = 0;
    }
    setDirection(newDirection);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Pause autoplay when the user is hovering over the slider
    if (isHovered || isModalOpen) return;

    const timer = setTimeout(() => {
      setSlide(currentIndex + 1, 1);
    }, AUTOPLAY_INTERVAL);

    return () => clearTimeout(timer);
  }, [currentIndex, isHovered, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setSlide(currentIndex - 1, -1);
      } else if (e.key === "ArrowRight") {
        setSlide(currentIndex + 1, 1);
      } else if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentIndex]);

  return (
    <section
      id="facility"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <img
            src={factoryImage}
            alt="Gedung Pabrik PT Sano Gratia Farma"
            className="w-full h-auto rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <FaIndustry className="text-4xl text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Fitur Fasilitas
                </h3>
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
                    <p className="text-gray-600 text-sm">
                      {manufacturingFacility.location}
                    </p>
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
            className="relative h-96 w-full overflow-hidden rounded-2xl shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={facilityImages[currentIndex]}
                alt={`Fasilitas Produksi ${currentIndex + 1}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full object-cover cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              />
            </AnimatePresence>

            <button
              onClick={() => setSlide(currentIndex - 1, -1)}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-md hover:bg-white transition z-10"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>
            <button
              onClick={() => setSlide(currentIndex + 1, 1)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 p-2 rounded-full shadow-md hover:bg-white transition z-10"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-blue-600" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {facilityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSlide(index, index > currentIndex ? 1 : -1)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index
                      ? "bg-blue-600"
                      : "bg-white/70 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setIsModalOpen(false)}
            >
              {/* Modal content container to stop backdrop click propagation */}
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image container with AnimatePresence for transitions */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative w-full h-full max-w-5xl max-h-[90vh] overflow-hidden rounded-lg shadow-2xl"
                >
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                      key={currentIndex}
                      src={facilityImages[currentIndex]}
                      alt={`Fasilitas Produksi ${currentIndex + 1} zoomed in`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* Navigation and Close buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSlide(currentIndex - 1, -1);
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-50 p-2 bg-black/20 rounded-full"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSlide(currentIndex + 1, 1);
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-50 p-2 bg-black/20 rounded-full"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-white text-4xl hover:text-gray-300 transition-colors z-50"
                aria-label="Close image modal"
              >
                <FaTimes />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Komitmen Terhadap Kualitas Terbaik
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Fasilitas modern kami memastikan setiap produk memenuhi standar
              kualitas dan keamanan tertinggi
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
  );
};

export default Facility;
