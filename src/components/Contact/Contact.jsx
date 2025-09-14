import React from "react";
import Button from "../Common/Button";
import { MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-950 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Ready to place an order? Contact us today!
          </p>
        </div>

        {/* Card */}
        <div
          className="bg-white dark:bg-gray-900 max-w-3xl mx-auto rounded-xl shadow-md p-6 
                     md:flex md:items-center md:justify-between 
                     transition-transform duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          {/* Left: Address + Phone */}
          <div className="space-y-5">
            {/* Address */}
            <div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Address
                </h3>
              </div>
              <a
                href="https://www.google.com/maps?q=12+Main+Market+Road,+Ahmedabad,+Gujarat+380001"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-gray-700 dark:text-gray-300 hover:underline"
              >
                Shri R.C. Electricals <br />
                12, Main Market Road Ahmedabad, Gujarat - 380001
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Phone
                </h3>
              </div>
              <a
                href="tel:+919876543210"
                className="mt-1 block text-sm text-gray-800 dark:text-gray-200 font-medium 
                           hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Right: WhatsApp Button */}
          <div className="text-center mt-6">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                text=" Chat on WhatsApp"
                className="bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-xl 
                 transition-all duration-300 transform 
                 hover:bg-green-700 hover:scale-150 hover:shadow-2xl 
                 hover:shadow-green-500/40 " 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
