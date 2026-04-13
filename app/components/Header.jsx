"use client";

import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/92 backdrop-blur-xl sticky top-0 z-50 border-b border-blue-100/50 supports-[backdrop-filter:blur(12px)]:backdrop-blur-3xl font-sans">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              className="text-2xl lg:text-3xl font-black text-blue-600 tracking-tight cursor-pointer select-none hover:text-blue-700 transition-colors"
            >
              KASHflow
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="#"
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-1"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-1"
              >
                Features
              </a>
              <a
                href="#"
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-1"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-1"
              >
                Contact
              </a>
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl border border-blue-600/20"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <button
                className="flex flex-col justify-center gap-1.5 p-1 hover:bg-slate-100 rounded-lg transition-colors group"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                <span
                  className={`w-6 h-0.5 bg-blue-600 rounded transition-all ${
                    open ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-blue-600 rounded transition-all ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-blue-600 rounded transition-all ${
                    open ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="lg:hidden border-t border-slate-200 bg-white px-4 pb-4 pt-2">
              {["Home", "Features", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-3 text-base font-medium text-slate-700 hover:text-blue-600 border-b border-slate-100 last:border-b-0 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#"
                className="block py-3 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl text-center mt-2 border border-blue-600/20 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
