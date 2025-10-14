import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import BioCon from "../../assets/brands/BioCon.jpg";
import LNT from "../../assets/brands/L&T.jpg";
import Schneider from "../../assets/brands/Schneider.jpg";
import Selec from "../../assets/brands/Selec.jpg";
import Shree from "../../assets/brands/Shree.jpg";
import SSG from "../../assets/brands/SSG.jpg";
import Taparia from "../../assets/brands/Taparia.jpg";
import Techson from "../../assets/brands/Techson.jpg";

const logos = [
  { src: BioCon, alt: "BioCon" },
  { src: LNT, alt: "L&T" },
  { src: Schneider, alt: "Schneider" },
  { src: Selec, alt: "Selec" },
  { src: Shree, alt: "Shree" },
  { src: SSG, alt: "SSG" },
  { src: Taparia, alt: "Taparia" },
  { src: Techson, alt: "Techson" },
];

function BrandCarousel() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2; // half because duplicated

    tweenRef.current = gsap.to(track, {
      x: `-=${totalWidth}`, // move left by one set width
      duration: 25,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth), // loop seamlessly
      },
    });

    return () => tweenRef.current?.kill();
  }, []);

  // Pause only when hovering a logo card
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
        <div
          ref={trackRef}
          className="flex gap-12 w-max"
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-500 rounded-xl shadow-md hover:shadow-xl p-4 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={logo.src}
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
