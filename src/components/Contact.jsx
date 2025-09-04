import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaFax,
} from "react-icons/fa";
import { companyInfo } from "../data/content";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Data:", data);
    setSubmitMessage(
      "Thank you for your message. We will get back to you soon!"
    );
    setIsSubmitting(false);
    reset();
    setTimeout(() => setSubmitMessage(""), 5000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Kantor Pusat",
      content: [
        companyInfo.contact.address.street,
        companyInfo.contact.address.area,
        `${companyInfo.contact.address.city}, ${companyInfo.contact.address.province} ${companyInfo.contact.address.postalCode}`,
        companyInfo.contact.address.country,
      ],
    },
    {
      icon: <FaPhone />,
      title: "Telepon",
      content: [companyInfo.contact.phone],
    },
    {
      icon: <FaFax />,
      title: "Fax",
      content: [companyInfo.contact.fax],
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: [companyInfo.contact.email],
    },
    {
      icon: <FaClock />,
      title: "Jam Kerja",
      content: [
        `Hari Kerja: ${companyInfo.contact.businessHours.weekdays}`,
        `Sabtu: ${companyInfo.contact.businessHours.saturday}`,
        `Minggu: ${companyInfo.contact.businessHours.sunday}`,
      ],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontak</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut atau konsultasi gratis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Kirim</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: "Name harus diisi" })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      {...register("company")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email harus diisi",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Email tidak valid",
                        },
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telepon
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Topik *
                  </label>
                  <input
                    type="text"
                    {...register("subject", {
                      required: "Topik harus diisi",
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Bagaimana kami dapat membantu Anda?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan *
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Pesan harus diisi",
                    })}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ceritakan tentang kebutuhan Anda..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Kirim Pesan"}
                </button>

                {submitMessage && (
                  <p className="text-green-600 text-center mt-4">
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-2xl text-primary mr-4 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                    {info.content.map((line, i) => (
                      <p key={i} className="text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* WhatsApp Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/6281213920468"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                  <FaWhatsapp className="mr-2 text-xl" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Map Placeholder */}
        <div className="mt-8 bg-gray-200 h-96 rounded-lg flex items-center justify-center">
          <iframe
            title="SGF Indonesia Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.839705358223!2d107.18639957370097!3d-6.28479136151429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6984ac8f130e59%3A0x2adbac4167600894!2sSano%20Gratia%20Farma%20Pt.%2C%20Jatireja%2C%20Kec.%20Cikarang%20Tim.%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1756711986982!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
