import React, { useState, useEffect } from 'react'
import Button from '../Common/Button'

const heroImages = [
  "../src/assets/Homehero/Home1.jpg",
  "../src/assets/Homehero/Home2.jpg",
  "../src/assets/Homehero/Home3.jpg",
  "../src/assets/Homehero/Home4.jpg",
];

function Home() {
  const [current, setCurrent] = useState(0);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="bg-gray-300 dark:bg-gray-950 transition-colors h-auto flex items-center justify-center px-6 md:px-12 py-12 lg:py-12"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-7xl">
        
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            SHRI R.C. Electricals ⚡
          </h1>

          <h2 className="text-lg md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mt-2">
            Trusted Supplier of Industrial & Heavy Electrical Gear
          </h2>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 max-w-xl mx-auto md:mx-0 mt-4">
            Quality electrical equipment for contractors, electricians, and industrial projects.
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            <Button text="Chat on WhatsApp" />
          </div>
        </div>

        {/* Right Section: Carousel */}
        <div className="flex-1 flex justify-center items-center relative w-full max-w-md h-60 lg:h-[500px]">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Home ${idx}`}
              className={`absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg transition-opacity duration-1000 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
