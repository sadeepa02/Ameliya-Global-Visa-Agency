"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Universities", href: "/universities" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --navy: #0a1628;
          --gold: #c9a84c;
          --gold-light: #e8c97a;
          --cream: #f8f4ee;
          --slate: #2d4a6e;
          --mist: rgba(255,255,255,0.07);
        }

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0 2rem;
        }

        .nav-root.scrolled {
          background: rgba(10, 22, 40, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          box-shadow: 0 8px 40px rgba(0,0,0,0.3);
        }

        .nav-root:not(.scrolled) {
          background: linear-gradient(180deg, rgba(10,22,40,0.85) 0%, transparent 100%);
        }

        .nav-inner {
          max-width: 1320px;
          margin: 0 auto;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          position: relative;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.04em;
        }

        .logo-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-top: 1px;
        }

        /* Nav Links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link-item a {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          padding: 0.5rem 0.85rem;
          border-radius: 6px;
          letter-spacing: 0.02em;
          transition: all 0.25s ease;
          position: relative;
          display: block;
        }

        .nav-link-item a::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 1.5px;
          background: var(--gold);
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-link-item a:hover {
          color: #fff;
          background: var(--mist);
        }

        .nav-link-item a:hover::after,
        .nav-link-item.active a::after {
          transform: translateX(-50%) scaleX(1);
        }

        .nav-link-item.active a {
          color: var(--gold-light);
        }

        /* Contact link — styled distinctly */
        .nav-link-item.contact a {
          color: var(--gold);
          border: 1px solid rgba(201,168,76,0.35);
          padding: 0.45rem 1rem;
        }

        .nav-link-item.contact a:hover {
          background: rgba(201,168,76,0.12);
          border-color: var(--gold);
        }

        .nav-link-item.contact a::after { display: none; }

        /* Right Side */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        /* User Button */
        .user-btn {
          position: relative;
        }

        .user-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--mist);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.85);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.825rem;
          font-weight: 500;
          padding: 0.5rem 0.9rem 0.5rem 0.6rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.01em;
        }

        .user-trigger:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(201,168,76,0.4);
          color: #fff;
        }

        .user-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--slate), var(--navy));
          border: 1.5px solid rgba(201,168,76,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          color: var(--gold);
          font-weight: 600;
        }

        .chevron {
          width: 14px;
          height: 14px;
          transition: transform 0.25s ease;
          opacity: 0.6;
        }

        .user-trigger[aria-expanded="true"] .chevron {
          transform: rotate(180deg);
        }

        /* Dropdown */
        .user-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: 200px;
          background: rgba(10, 22, 40, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(201,168,76,0.18);
          border-radius: 12px;
          padding: 0.5rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .user-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-divider {
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin: 0.4rem 0.5rem;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.6rem 0.85rem;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.825rem;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
        }

        .dropdown-item:hover {
          background: rgba(255,255,255,0.06);
          color: #fff;
        }

        .dropdown-item svg {
          width: 15px;
          height: 15px;
          opacity: 0.6;
          flex-shrink: 0;
        }

        .dropdown-item.logout {
          color: rgba(239,68,68,0.8);
        }

        .dropdown-item.logout:hover {
          background: rgba(239,68,68,0.08);
          color: rgb(239,68,68);
        }

        /* CTA Button */
        .cta-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.825rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.6rem 1.4rem;
          border-radius: 6px;
          background: linear-gradient(135deg, var(--gold) 0%, #a87c2e 100%);
          color: var(--navy);
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(201,168,76,0.3);
          white-space: nowrap;
        }

        .cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 28px rgba(201,168,76,0.45);
          background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%);
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 0.5rem;
          background: none;
          border: none;
        }

        .ham-line {
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.8);
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open .ham-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger.open .ham-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger.open .ham-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile Menu */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 80px; left: 0; right: 0;
          background: rgba(8, 18, 34, 0.98);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          padding: 1.5rem 2rem 2rem;
          transform: translateY(-10px);
          opacity: 0;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobile-links {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mobile-links a {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          transition: all 0.2s;
          border-left: 2px solid transparent;
        }

        .mobile-links a:hover {
          background: rgba(255,255,255,0.05);
          color: #fff;
          border-left-color: var(--gold);
          padding-left: 1.4rem;
        }

        .mobile-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .mobile-login {
          flex: 1;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 0.7rem 1.2rem;
          border-radius: 8px;
          text-decoration: none;
          text-align: center;
          transition: all 0.2s;
        }

        .mobile-login:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }

        .mobile-cta {
          flex: 1;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--navy);
          background: linear-gradient(135deg, var(--gold), #a87c2e);
          padding: 0.7rem 1.2rem;
          border-radius: 8px;
          text-decoration: none;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: block; }
          .cta-btn { display: none; }
        }
      `}</style>

      <nav className={`nav-root${isScrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className="logo">
            <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19" stroke="#c9a84c" strokeWidth="1.5" opacity="0.4"/>
              <path d="M20 8 L28 14 L28 26 L12 26 L12 14 Z" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M16 26 L16 20 L24 20 L24 26" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M20 8 L20 14" stroke="#c9a84c" strokeWidth="1" opacity="0.6"/>
              <circle cx="20" cy="15.5" r="2" fill="#c9a84c" opacity="0.8"/>
              <path d="M14 34 Q20 30 26 34" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.5"/>
            </svg>
            <div className="logo-text">
              <span className="logo-name">Amelia Global</span>
              <span className="logo-tagline">Visa Agency</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href} className={`nav-link-item${link.label === "Contact" ? " contact" : ""}`}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="nav-right">
            {/* User Login Dropdown */}
            <div className="user-btn">
              <button
                className="user-trigger"
                aria-expanded={userMenuOpen}
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <div className="user-avatar">
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3 13.5C3 11 5.24 9 8 9s5 2 5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>Account</span>
                <svg className="chevron" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              <div className={`user-dropdown${userMenuOpen ? " open" : ""}`}>
                <Link href="/login" className="dropdown-item" onClick={() => setUserMenuOpen(false)}>
                  <svg viewBox="0 0 16 16" fill="none"><path d="M10 3h3v10h-3M7 11l3-3-3-3M1 8h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  Sign In
                </Link>
                <Link href="/register" className="dropdown-item" onClick={() => setUserMenuOpen(false)}>
                  <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.3"/><path d="M2 13c0-2.5 2.7-4 6-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M12 10v4M10 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  Create Account
                </Link>
                <div className="dropdown-divider" />
                <Link href="/track-application" className="dropdown-item" onClick={() => setUserMenuOpen(false)}>
                  <svg viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M5 8h6M5 5.5h3M5 10.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  Track Application
                </Link>
              </div>
            </div>

            {/* CTA */}
            <Link href="/apply" className="cta-btn">Apply Now</Link>

            {/* Hamburger */}
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="ham-line" />
              <span className="ham-line" />
              <span className="ham-line" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="mobile-actions">
          <Link href="/login" className="mobile-login" onClick={() => setMenuOpen(false)}>Sign In</Link>
          <Link href="/apply" className="mobile-cta" onClick={() => setMenuOpen(false)}>Apply Now</Link>
        </div>
      </div>

      {/* Backdrop */}
      {(menuOpen || userMenuOpen) && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 999 }}
          onClick={() => { setMenuOpen(false); setUserMenuOpen(false); }}
        />
      )}
    </>
  );
}