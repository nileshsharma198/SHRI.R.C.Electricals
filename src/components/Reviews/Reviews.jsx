import React, { useState } from "react";

function Reviews() {
  const allReviews = [
    {
      name: "Rahul Sharma",
      role: "Shop Owner",
      review:
        "Best electrical shop in town. They always provide genuine products at fair prices.",
    },
    {
      name: "Priya Patel",
      role: "Interior Designer",
      review:
        "I bought all lighting equipment from here for a project. Excellent quality and service!",
    },
    {
      name: "Amit Verma",
      role: "Contractor",
      review:
        "Wide variety of electrical items available. The staff explained everything clearly.",
    },
    {
      name: "Sneha Iyer",
      role: "Homeowner",
      review:
        "They guided me perfectly in choosing the right wiring and switches for my new house.",
    },
    {
      name: "Vikram Singh",
      role: "Electrician",
      review:
        "Whenever I need electrical supplies urgently, R.C. Electricals never disappoints.",
    },
    {
      name: "Neha Gupta",
      role: "Architect",
      review:
        "Top-quality products and very professional service. Highly recommended for big projects.",
    },
    {
      name: "Suresh Nair",
      role: "Hotel Manager",
      review:
        "I bought all electrical fittings for my hotel here. The rates and after-sales support are amazing.",
    },
    {
      name: "Anjali Mehta",
      role: "Homeowner",
      review:
        "Polite staff and genuine pricing. Found everything I needed for home renovation.",
    },
  ];

  // Show 3 reviews at first
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allReviews.length));
  };

  const showLess = () => {
    setVisibleCount(3);
  };

  // Helper function to get initials
  const getInitials = (name) => {
    const parts = name.split(" ");
    return parts.length > 1
      ? parts[0][0] + parts[1][0]
      : parts[0][0];
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-950 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
            1000+ customers trust Shri R.C. Electricals
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl">
            What our happy customers say
          </h2>
        </div>

        {/* Cards */}
        <div className="relative mt-10 md:mt-24">
          {/* background gradient blur */}
          <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
            <div
              className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-20 blur-lg"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            />
          </div>

          <div className="relative grid max-w-lg grid-cols-1 gap-8 mx-auto md:max-w-none md:grid-cols-3">
            {allReviews.slice(0, visibleCount).map((card, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col justify-between flex-1 p-6 lg:py-8 lg:px-7">
                  {/* stars */}
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* review */}
                  <blockquote className="flex-1 mt-6">
                    <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-100">
                      “{card.review}”
                    </p>
                  </blockquote>

                  {/* author */}
                  <div className="flex items-center mt-8">
                    {/* initials avatar */}
                    <div className="flex items-center justify-center flex-shrink-0 w-11 h-11 rounded-full bg-indigo-500 text-white font-bold">
                      {getInitials(card.name)}
                    </div>
                    <div className="ml-4 text-left">
                      <p className="text-base font-bold text-gray-900 dark:text-white">
                        {card.name}
                      </p>
                      <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                        {card.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 text-center md:mt-16">
          {visibleCount < allReviews.length ? (
            <button
              onClick={loadMore}
              className="pb-2 text-base font-bold leading-7 text-gray-900 dark:text-white transition-all duration-200 border-b-2 border-gray-900 dark:border-white hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Load more reviews
            </button>
          ) : (
            <button
              onClick={showLess}
              className="pb-2 text-base font-bold leading-7 text-gray-900 dark:text-white transition-all duration-200 border-b-2 border-gray-900 dark:border-white hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Show less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
