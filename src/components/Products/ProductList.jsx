import React from "react";
import ProductCard from "./ProductCard";

// Products array using public paths
const products = [
  { id: 1, title: "Main Switch", image: "/assets/Products/mainswitch.jpg" },
  { id: 2, title: "Industrial Panel", image: "/assets/Products/industrialpanel.jpg" },
  { id: 3, title: "Circuit Breaker", image: "/assets/Products/circuitbreaker.jpg" },
  { id: 4, title: "Capacitor", image: "/assets/Products/capacitor.jpg" },
  { id: 5, title: "Cable Roll", image: "/assets/Products/cableroll.jpg" },
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
