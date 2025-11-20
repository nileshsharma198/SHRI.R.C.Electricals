// import React from "react";
// import Button from "../Common/Button";

// function ProductCard({ product }) {
//   if (!product) return null;

//   return (
//     <div
//       className="rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
//                  shadow-sm group hover:shadow-2xl transition-transform duration-500 
//                  overflow-hidden flex flex-col p-4 transform hover:scale-105"
//     >
//       {/* Product Image */}
//       <img
//         src={product.image}
//         alt={product.title}
//         className="h-65 w-auto object-contain mb-2 " // tightened spacing
//       />

//       {/* Product Title */}
//       <h3 className="text-lg font-semibold text-left mb-3">{product.title}</h3>

//       {/* Enquire Button */}
//       <Button
//         text="Enquire on WhatsApp"
//         productName={product.title}
//         className="bg-green-600 text-white text-lg font-bold px-6 py-3 rounded-xl 
//                  transition-all duration-300 transform 
//                  hover:bg-green-700 hover:scale-105 hover:shadow-2xl 
//                  hover:shadow-green-500/40 text-center mt-auto"
//       />
//     </div>
//   );
// }

// export default ProductCard;


import React from "react";
import Button from "../Common/Button";

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div
      className="rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                 shadow-sm group hover:shadow-2xl transition-transform duration-500 
                 overflow-hidden flex flex-col p-4 transform hover:scale-105"
    >
      {/* Product Image Container (fixed height) */}
      <div className="h-64 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-auto object-contain mb-2"
        />
      </div>

      {/* Product Title */}
      <h3 className="text-lg font-semibold text-left mb-3">{product.title}</h3>

      {/* Enquire Button */}
      <Button
        text="Enquire on WhatsApp"
        productName={product.title}
        className="bg-green-600 text-white text-lg font-bold px-6 py-3 rounded-xl 
                 transition-all duration-300 transform 
                 hover:bg-green-700 hover:scale-105 hover:shadow-2xl 
                 hover:shadow-green-500/40 text-center mt-auto"
      />
    </div>
  );
}

export default ProductCard;
