"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-8 w-8 rounded-full mr-2"
              />
              </Link>
              <span className="text-xl font-bold">Tala Prattoy</span>

          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/service"
              className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
            >
              Service
            </Link>
            <Link
              href="/album"
              className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
            >
              Album
            </Link>
            <Link
              href="/stories"
              className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
            >
              Stories
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
            >
              Blog
            </Link>
          </div>
          <div className="hidden md:flex md:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-black bg-white hover:bg-gray-200"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label="Menu"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label="Close"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/about"
            className="block px-3 py-2 text-base font-medium text-white hover:text-gray-300"
          >
            About
          </Link>
          <Link
            href="/service"
            className="block px-3 py-2 text-base font-medium text-white hover:text-gray-300"
          >
            Service
          </Link>
          <Link
            href="/album"
            className="block px-3 py-2 text-base font-medium text-white hover:text-gray-300"
          >
            Album
          </Link>
          <Link
            href="/stories"
            className="block px-3 py-2 text-base font-medium text-white hover:text-gray-300"
          >
            Stories
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 text-base font-medium text-white hover:text-gray-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-base font-medium text-white hover:text-gray-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
