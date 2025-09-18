import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Tonggak Sejarah", href: "#milestones" },
    { name: "Produk", href: "#products" },
    { name: "Fasilitas", href: "#facility" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-white shadow-lg z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src={logo}
              alt="PT Sano Gratia Farma Logo"
              className="h-12 mr-3"
            />
            <div>
              <span className="text-2xl font-bold text-green-600">
                PT Sano Gratia Farma
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
