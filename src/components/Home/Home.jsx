import React from 'react'
import Button from '../Common/Button'

function Home() {
  return (
    <div id="home" className="bg-gray-300 dark:bg-gray-950 transition-colors h-auto flex items-center justify-center px-6 md:px-12 py-40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
        
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            SHRI RC Electricals ⚡
          </h1>

          <h2 className="text-lg md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mt-2">
            Trusted Supplier of Industrial & Heavy Electrical Gear
          </h2>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 max-w-xl mx-auto md:mx-0 mt-2">
            Quality electrical equipment for contractors, electricians, and 
            industrial projects.
          </p>

          <div className="mt-4 flex justify-center md:justify-start">
            <Button text="Chat on WhatsApp" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="../src/assets/Home.jpg"
            alt="Home"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
