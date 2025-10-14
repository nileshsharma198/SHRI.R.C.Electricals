import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-800 dark:text-gray-300 border-t border-gray-300/40 dark:border-gray-800/60 overflow-hidden">
      
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-600/10 rounded-full blur-3xl" />

      <motion.div 
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Company Info */}
        <div>
          <motion.h2 
            className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            SHRI R.C Electricals
          </motion.h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
            Powering industries with premium quality electrical solutions and reliable services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Home", "Products","Reviews", "Contact"].map((link) => (
              <motion.li
                key={link}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-green-500 transition-colors duration-200"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            📍 Rajkot, Gujarat, India  
            <br />
            📞 +91 70434 52827
            <br />
            ✉️ info@src-electricals.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-5">
            <motion.a
              href="https://wa.me/917043452827"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              <FaWhatsapp size={26} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-pink-500 hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={26} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={26} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        className="border-t border-gray-300/40 dark:border-gray-700/60 py-5 text-center text-sm text-gray-500 dark:text-gray-400 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        © {new Date().getFullYear()} SHRI R.C Electricals — Crafted with ❤️ by Nilesh.
      </motion.div>
    </footer>
  );
}

export default Footer;
