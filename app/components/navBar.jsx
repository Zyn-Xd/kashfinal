"use client";

import React, { useState } from "react";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  .navbar {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(26, 59, 255, 0.08);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .navbar-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-logo {
    font-size: 20px;
    font-weight: 800;
    color: #1A3BFF;
    letter-spacing: -0.5px;
    text-decoration: none;
    cursor: pointer;
  }

  .navbar-links {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .navbar-links a {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    text-decoration: none;
    transition: color 0.2s;
  }

  .navbar-links a:hover {
    color: #1A3BFF;
  }

  .navbar-cta {
    background: #1A3BFF;
    color: white !important;
    padding: 9px 22px;
    border-radius: 10px;
    font-weight: 700 !important;
    font-size: 14px;
    transition: background 0.2s, transform 0.2s !important;
  }

  .navbar-cta:hover {
    background: #1530d4;
    transform: translateY(-1px);
    color: white !important;
  }

  /* Mobile hamburger */
  .navbar-hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 4px;
  }

  .navbar-hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: #1A3BFF;
    border-radius: 2px;
    transition: all 0.3s;
  }

  .navbar-mobile {
    display: none;
    flex-direction: column;
    gap: 4px;
    padding: 16px 32px 20px;
    background: white;
    border-top: 1px solid rgba(26,59,255,0.08);
  }

  .navbar-mobile a {
    font-size: 15px;
    font-weight: 500;
    color: #374151;
    text-decoration: none;
    padding: 10px 0;
    border-bottom: 1px solid #f3f4f6;
    transition: color 0.2s;
  }

  .navbar-mobile a:hover {
    color: #1A3BFF;
  }

  .navbar-mobile .navbar-cta {
    margin-top: 8px;
    text-align: center;
    border-radius: 10px;
    padding: 12px;
    border-bottom: none;
  }

  @media (max-width: 768px) {
    .navbar-links { display: none; }
    .navbar-hamburger { display: flex; }
    .navbar-mobile.open { display: flex; }
    .navbar-inner { padding: 0 20px; }
  }

  @media (max-width: 540px) {
    .navbar-inner { padding: 0 16px; }
    .navbar-mobile { padding: 12px 16px 16px; }
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{CSS}</style>
      <nav className="navbar">
        <div className="navbar-inner">
          <span className="navbar-logo">KASHflow</span>

          {/* Desktop links */}
          <div className="navbar-links">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#" className="navbar-cta">Get Started</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              style={
                open
                  ? { transform: "rotate(45deg) translate(5px, 5px)" }
                  : undefined
              }
            />
            <span style={open ? { opacity: 0 } : undefined} />
            <span
              style={
                open
                  ? { transform: "rotate(-45deg) translate(5px, -5px)" }
                  : undefined
              }
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`navbar-mobile${open ? " open" : ""}`}>
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#" onClick={() => setOpen(false)}>Features</a>
          <a href="#" onClick={() => setOpen(false)}>About</a>
          <a href="#" onClick={() => setOpen(false)}>Contact</a>
          <a href="#" className="navbar-cta" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </div>
      </nav>
    </>
  );
}
