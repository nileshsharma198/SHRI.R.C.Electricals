import React from "react";
import { X } from "lucide-react";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

function Drawer({ open, setOpen, links }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl 
                    transform transition-transform duration-300 ease-in-out
                    flex flex-col p-6 z-50
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Btn */}
        <button
          className="self-end p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          onClick={() => setOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-4 mt-6 font-medium text-gray-700 dark:text-gray-300">
          {links.map((link) => (
            <p
              key={link}
              className="hover:text-primary dark:hover:text-primary cursor-pointer transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </p>
          ))}
        </nav>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-4">
          <ThemeToggle />
          <Button text="Chat on WhatsApp" />
        </div>
      </div>
    </>
  );
}

export default Drawer;
