<<<<<<< HEAD
import React from "react";

function Button({ text }) {
  return (
    <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded-lg shadow-md transition duration-200">
=======
// import React from "react";

// function Button({ text }) {
//   return (
//     <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded-lg shadow-md transition duration-200">
//       {/* Chat Icon */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="2"
//         stroke="currentColor"
//         className="w-5 h-5"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.83L3 20l1.31-3.93A7.95 7.95 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//         />
//       </svg>

//       {text}
//     </button>
//   );
// }

// export default Button;

import React from "react";

function Button({ text, productName }) {
  const whatsappNumber = "917043452827"; 
  const message = `Hello! I'm interested in the ${productName || "product"}. Please provide more details.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded-lg shadow-md transition duration-200"
    >
>>>>>>> 7551ef0 (First Commit)
      {/* Chat Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.83L3 20l1.31-3.93A7.95 7.95 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>

      {text}
    </button>
  );
}

export default Button;
