import React, { useState } from "react";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-blue-950 backdrop-blur-md shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6 md:px-12">
        {/* Logo + Name */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-wide">
          SHRI RC Electricals
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 font-medium text-gray-700 dark:text-gray-300">
          <p className="hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">
            Home
          </p>
          <p className="hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">
            Products
          </p>
          <p className="hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">
            Reviews
          </p>
          <p className="hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">
            Contact
          </p>
        </nav>

        {/* Actions (Theme + WhatsApp Button) */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button text="Chat on WhatsApp" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-white dark:bg-blue-950 shadow-lg p-6 flex flex-col gap-6 text-lg font-medium text-gray-800 dark:text-gray-200 z-40">
          <p className="hover:text-primary cursor-pointer transition-colors">
            Home
          </p>
          <p className="hover:text-primary cursor-pointer transition-colors">
            Products
          </p>
          <p className="hover:text-primary cursor-pointer transition-colors">
            Reviews
          </p>
          <p className="hover:text-primary cursor-pointer transition-colors">
            Contact
          </p>

          <div className="mt-6">
            <Button text="Chat on WhatsApp" className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
