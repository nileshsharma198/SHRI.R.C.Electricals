// // src/components/Products/ProductList.jsx
// import React from "react";
// import ProductCard from "./ProductCard";

// // Static image imports
// import mainSwitchImg from "../../assets/Products/mainswitch.jpg";
// import industrialPanelImg from "../../assets/Products/industrialpanel.jpg";
// import circuitBreakerImg from "../../assets/Products/circuitbreaker.jpg";
// import capacitorImg from "../../assets/Products/capacitor.jpg";
// import cableRollImg from "../../assets/Products/cableroll.jpg";

// const products = [
//   { id: 1, title: "Main Switch", image: mainSwitchImg },
//   { id: 2, title: "Industrial Panel", image: industrialPanelImg },
//   { id: 3, title: "Circuit Breaker", image: circuitBreakerImg },
//   { id: 4, title: "Capacitor", image: capacitorImg },
//   { id: 5, title: "Cable Roll", image: cableRollImg },
// ];

// function ProductList() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

// export default ProductList;

import React from "react";
import ProductCard from "./ProductCard";

// Static image imports
import mainSwitchImg from "../../assets/Products/mainswitch.jpg";
import industrialPanelImg from "../../assets/Products/industrialpanel.jpg";
import circuitBreakerImg from "../../assets/Products/circuitbreaker.jpg";
import capacitorImg from "../../assets/Products/capacitor.jpg";
import cableRollImg from "../../assets/Products/cableroll.jpg";

const products = [
  { id: 1, title: "Main Switch", image: mainSwitchImg },
  { id: 2, title: "Industrial Panel", image: industrialPanelImg },
  { id: 3, title: "Circuit Breaker", image: circuitBreakerImg },
  { id: 4, title: "Capacitor", image: capacitorImg },
  { id: 5, title: "Cable Roll", image: cableRollImg },
];

function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 justify-items-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
