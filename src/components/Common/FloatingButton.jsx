import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 200px
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    const phone = "917043452827";
    const message = encodeURIComponent(
      "Hello! 👋 I'm interested in your products. Please share more details."
    );
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
   <div
  className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
  } animate-scalePulse`} // <-- animate wrapper
>
  <button
    onClick={handleClick}
    className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg
               flex items-center justify-center text-white text-2xl
               transition-transform duration-300 transform hover:scale-125"
  >
    <FaWhatsapp className="w-7 h-7" />
  </button>
</div>

  );
}
