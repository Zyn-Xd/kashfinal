"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar { width:100%; background: linear-gradient(135deg,#fff 0%,#f0f7ff 50%,#e6f0ff 100%); border-bottom:1px solid rgba(0,0,0,0.05); font-family:sans-serif; }
        .inner { max-width:1200px; margin:0 auto; padding:0 24px; display:flex; justify-content:space-between; align-items:center; height:70px; position:relative; }
        .logo { font-size:22px; font-weight:700; color:#6366f1; text-decoration:none; }
        .links { display:flex; gap:40px; position:absolute; left:50%; transform:translateX(-50%); }
        .link { color:#374151; text-decoration:none; font-size:15px; font-weight:500; transition:color .2s; }
        .link:hover { color:#6366f1; }
        .auth { display:flex; gap:12px; align-items:center; }
        .btn { padding:8px 20px; font-size:14px; font-weight:500; border-radius:6px; cursor:pointer; transition:all .2s; text-decoration:none; }
        .signup { color:#6366f1; border:1.5px solid #6366f1; background:transparent; }
        .signup:hover { background: rgba(99,102,241,0.1); }
        .login { color:#fff; background:#2563eb; border:1.5px solid #2563eb; }
        .login:hover { background:#1d4ed8; border-color:#1d4ed8; }
        .toggle { display:none; background:none; border:none; cursor:pointer; }
        .hamburger { width:24px; height:18px; display:flex; flex-direction:column; justify-content:space-between; }
        .hamburger span { display:block; width:100%; height:2px; background:#374151; border-radius:2px; transition:all .3s; transform-origin:center; }
        .hamburger.active span:nth-child(1) { transform:rotate(45deg) translate(5px,5px); }
        .hamburger.active span:nth-child(2) { opacity:0; }
        .hamburger.active span:nth-child(3) { transform:rotate(-45deg) translate(5px,-5px); }
        .mobile { display:none; background:#fff; border-top:1px solid #e5e7eb; padding:16px 24px; }
        .mobile.open { display:block; }
        .mobile a { display:block; padding:12px 0; color:#374151; text-decoration:none; font-weight:500; border-bottom:1px solid #f3f4f6; }
        .mobile a:hover { color:#6366f1; }
        @media(max-width:768px){ .links,.auth{display:none;} .toggle{display:block;} }
      `}</style>

      <nav className="navbar">
        <div className="inner">
          <Link href="/" className="logo">
            KASHflow
          </Link>

          <div className="links">
            <Link href="/products" className="link">
              Products
            </Link>
            <Link href="/cart" className="link">
              Cart
            </Link>
            <a href="#features" className="link">
              Features
            </a>
            <a href="#contact" className="link">
              Contact
            </a>
          </div>

          <div className="auth">
            <a href="#signup" className="btn signup">
              Sign up
            </a>
            <a href="#login" className="btn login">
              Login
            </a>
          </div>

          <button
            className="toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className={`hamburger ${mobileOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div className={`mobile ${mobileOpen ? "open" : ""}`}>
          <Link
            href="/products"
            onClick={() => setMobileOpen(false)}
            className=""
          >
            Products
          </Link>
          <Link href="/cart" onClick={() => setMobileOpen(false)} className="">
            Cart
          </Link>
          <a href="#features" onClick={() => setMobileOpen(false)}>
            Features
          </a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>
            Contact
          </a>
          <a
            href="#signup"
            onClick={() => setMobileOpen(false)}
            className="signup"
          >
            Sign up
          </a>
          <a
            href="#login"
            onClick={() => setMobileOpen(false)}
            className="login"
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
