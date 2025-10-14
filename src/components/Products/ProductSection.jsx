// // src/components/Products/ProductsSection.jsx
// import React from "react";
// import ProductList from "./ProductList";
// import Button from "../Common/Button";

// function ProductsSection() {
//   return (
//     <section className="w-full py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold text-center">
//         Our Key Products
//       </h1>

//       {/* Description */}
//       <p className="text-xl mt-2 max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-center">
//         Premium quality electrical equipment for all your industrial needs
//       </p>

//       {/* Products Grid */}
//       <div className="mt-10">
//         <ProductList />
//       </div>

      
//     </section>
//   );
// }

// export default ProductsSection;

import React from "react";
import ProductList from "./ProductList";

function ProductsSection() {
  return (
    <section className="w-full py-16 px-6 sm:px-10 lg:px-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight text-center">
        Our Key Products
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-center">
        Premium quality electrical equipment for all your industrial needs
      </p>

      {/* Products Grid */}
      <div className="mt-12">
        <ProductList />
      </div>
    </section>
  );
}

export default ProductsSection;
