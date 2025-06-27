import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0a1120] text-white pt-12 pb-5 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center mb-3">
            <svg
              className="w-7 h-7 text-blue-600 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
              />
            </svg>
            <span className="font-extrabold text-2xl tracking-tight">
              BookmarkVault
            </span>
          </div>
          <p className="text-gray-300 mb-4 text-sm">
            The ultimate platform for saving and organizing all your important
            websites in one secure place.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-400" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-400" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-400" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-blue-400" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">Product</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                API
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">Support</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-700 my-6 max-w-6xl mx-auto" />
      <div className="text-center text-gray-400 text-xs">
        © 2025 BookmarkVault. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
