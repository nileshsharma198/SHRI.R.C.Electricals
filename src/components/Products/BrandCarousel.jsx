import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// ✅ Remove all import statements for public images
const logos = [
  { src: "/assets/Brands/BioCon.jpg", alt: "Biocon" },
  { src: "/assets/Brands/LNT.jpg", alt: "L&T" },
  { src: "/assets/Brands/Schneider.jpg", alt: "Schneider" },
  { src: "/assets/Brands/Selec.jpg", alt: "Selec" },
  { src: "/assets/Brands/Shree.jpg", alt: "Shree" },
  { src: "/assets/Brands/SSG.jpg", alt: "SSG" },
  { src: "/assets/Brands/Taparia.jpg", alt: "Taparia" },
  { src: "/assets/Brands/Techson.jpg", alt: "Techson" },
];

function BrandCarousel() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2; // half because duplicated

    tweenRef.current = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 25,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
      },
    });

    return () => tweenRef.current?.kill();
  }, []);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.resume();

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-700 py-12 text-center overflow-hidden">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Our Trusted Brands
      </h1>
      <p className="text-xl mt-2 text-gray-600 dark:text-gray-300">
        Partnering with the most reliable names in the industry
      </p>

      {/* Carousel */}
      <div className="relative mt-10 w-full overflow-hidden">
        <div ref={trackRef} className="flex gap-12 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-500 rounded-xl shadow-md hover:shadow-xl p-4 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={logo.src} // ✅ using public path
                alt={logo.alt}
                className="h-40 w-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandCarousel;
