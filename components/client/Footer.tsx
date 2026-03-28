import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Universities", href: "/universities" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Student Visa", href: "/services/student-visa" },
    { label: "Work Permit", href: "/services/work-permit" },
    { label: "Tourist Visa", href: "/services/tourist-visa" },
    { label: "Business Visa", href: "/services/business-visa" },
    { label: "PR & Migration", href: "/services/pr-migration" },
    { label: "Document Attestation", href: "/services/attestation" },
  ];

  const destinations = [
    { label: "United Kingdom", href: "/destinations/uk" },
    { label: "United States", href: "/destinations/usa" },
    { label: "Canada", href: "/destinations/canada" },
    { label: "Australia", href: "/destinations/australia" },
    { label: "Germany", href: "/destinations/germany" },
    { label: "New Zealand", href: "/destinations/new-zealand" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --navy: #0a1628;
          --navy-mid: #0f1f38;
          --navy-light: #162a4a;
          --gold: #c9a84c;
          --gold-light: #e8c97a;
          --cream: #f8f4ee;
          --text-muted: rgba(255,255,255,0.45);
          --text-soft: rgba(255,255,255,0.65);
        }

        .footer {
          background: var(--navy);
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* Top accent */
        .footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent 100%);
          opacity: 0.6;
        }

        /* Decorative globe watermark */
        .footer-globe {
          position: absolute;
          right: -80px;
          top: -60px;
          width: 380px;
          height: 380px;
          opacity: 0.03;
          pointer-events: none;
        }

        /* Newsletter banner */
        .newsletter-bar {
          background: var(--navy-mid);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 2.5rem 2rem;
        }

        .newsletter-inner {
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .newsletter-copy {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .newsletter-icon {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .newsletter-copy h4 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.2rem 0;
        }

        .newsletter-copy p {
          font-size: 0.82rem;
          color: var(--text-soft);
          margin: 0;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
          flex: 1;
          max-width: 420px;
        }

        .newsletter-input {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          padding: 0.7rem 1rem;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.2s;
        }

        .newsletter-input::placeholder { color: var(--text-muted); }
        .newsletter-input:focus { border-color: rgba(201,168,76,0.45); }

        .newsletter-submit {
          background: linear-gradient(135deg, var(--gold), #a87c2e);
          color: var(--navy);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.825rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.7rem 1.4rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
          white-space: nowrap;
        }

        .newsletter-submit:hover {
          box-shadow: 0 4px 20px rgba(201,168,76,0.35);
          transform: translateY(-1px);
        }

        /* Main Footer Body */
        .footer-body {
          padding: 4rem 2rem;
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 3rem;
        }

        /* Brand column */
        .footer-brand .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          margin-bottom: 1.25rem;
        }

        .brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }

        .brand-sub {
          font-size: 0.6rem;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        .brand-desc {
          font-size: 0.85rem;
          line-height: 1.7;
          color: var(--text-soft);
          margin-bottom: 1.75rem;
          max-width: 280px;
        }

        /* Contact Info */
        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.75rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.835rem;
          color: var(--text-soft);
        }

        .contact-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: rgba(201,168,76,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .contact-icon svg { color: var(--gold); }

        .contact-list a {
          color: var(--text-soft);
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-list a:hover { color: var(--gold-light); }

        /* Socials */
        .socials {
          display: flex;
          gap: 0.6rem;
        }

        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-soft);
          text-decoration: none;
          transition: all 0.25s;
        }

        .social-link:hover {
          background: rgba(201,168,76,0.12);
          border-color: rgba(201,168,76,0.35);
          color: var(--gold);
          transform: translateY(-2px);
        }

        /* Link columns */
        .footer-col h5 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 1.25rem 0;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid rgba(201,168,76,0.2);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-col h5::before {
          content: '';
          width: 3px;
          height: 14px;
          background: var(--gold);
          border-radius: 2px;
          display: inline-block;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-links a {
          font-size: 0.845rem;
          color: var(--text-soft);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.2rem 0;
          transition: all 0.2s;
        }

        .footer-links a::before {
          content: '';
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.25s ease;
          border-radius: 1px;
        }

        .footer-links a:hover {
          color: #fff;
          padding-left: 0.4rem;
        }

        .footer-links a:hover::before { width: 12px; }

        /* Accreditations */
        .accreditation-bar {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 1.5rem 2rem;
        }

        .accreditation-inner {
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .acc-label {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .acc-badges {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .acc-badge {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-soft);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.35rem 0.85rem;
          border-radius: 4px;
          letter-spacing: 0.03em;
        }

        /* Bottom bar */
        .footer-bottom {
          background: rgba(0,0,0,0.2);
          padding: 1.25rem 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .footer-bottom-inner {
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .copyright {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .copyright strong {
          color: var(--text-soft);
          font-weight: 500;
        }

        .legal-links {
          display: flex;
          gap: 1.5rem;
        }

        .legal-links a {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .legal-links a:hover { color: var(--gold); }

        .scroll-top {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, var(--gold), #a87c2e);
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s;
          box-shadow: 0 4px 16px rgba(201,168,76,0.25);
        }

        .scroll-top:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(201,168,76,0.4);
        }

        @media (max-width: 1024px) {
          .footer-body {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .footer-body {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .newsletter-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .newsletter-form {
            max-width: 100%;
            width: 100%;
          }

          .footer-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `}</style>

      <footer className="footer">
        {/* Background globe */}
        <svg className="footer-globe" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1"/>
          <ellipse cx="100" cy="100" rx="50" ry="90" stroke="white" strokeWidth="1"/>
          <ellipse cx="100" cy="100" rx="90" ry="40" stroke="white" strokeWidth="1"/>
          <line x1="10" y1="100" x2="190" y2="100" stroke="white" strokeWidth="1"/>
          <line x1="100" y1="10" x2="100" y2="190" stroke="white" strokeWidth="1"/>
        </svg>

        {/* Newsletter Strip */}
        <div className="newsletter-bar">
          <div className="newsletter-inner">
            <div className="newsletter-copy">
              <div className="newsletter-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                  <path d="M3 8l9 6 9-6M3 8v10a1 1 0 001 1h16a1 1 0 001-1V8M3 8a1 1 0 011-1h16a1 1 0 011 1"/>
                </svg>
              </div>
              <div>
                <h4>Stay Updated on Visa Policies</h4>
                <p>Get the latest news on immigration rules and university admissions.</p>
              </div>
            </div>
            <div className="newsletter-form">
              <input type="email" className="newsletter-input" placeholder="Your email address" />
              <button className="newsletter-submit">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Main Body */}
        <div className="footer-body">

          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" className="brand-logo">
              <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="#c9a84c" strokeWidth="1.5" opacity="0.4"/>
                <path d="M20 8 L28 14 L28 26 L12 26 L12 14 Z" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M16 26 L16 20 L24 20 L24 26" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="20" cy="15.5" r="2" fill="#c9a84c" opacity="0.8"/>
              </svg>
              <div>
                <div className="brand-name">Amelia Global</div>
                <div className="brand-sub">Visa Agency</div>
              </div>
            </Link>

            <p className="brand-desc">
              Your trusted partner for global immigration, student visas, and university placements.
              We guide you every step of the way to your dream destination.
            </p>

            <ul className="contact-list">
              <li>
                <span className="contact-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </span>
                <span>A108 Adam Street, New York, NY 10001</span>
              </li>
              <li>
                <span className="contact-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </span>
                <a href="tel:+15589553700">+1 558 955 3700</a>
              </li>
              <li>
                <span className="contact-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 8l9 6 9-6M3 8v10a1 1 0 001 1h16a1 1 0 001-1V8M3 8a1 1 0 011-1h16a1 1 0 011 1"/>
                  </svg>
                </span>
                <a href="mailto:info@ameliaglobal.com">info@ameliaglobal.com</a>
              </li>
            </ul>

            <div className="socials">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Instagram", path: "M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6zM12 16a4 4 0 110-8 4 4 0 010 8zm4.5-9a1 1 0 100-2 1 1 0 000 2z" },
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
                { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
              ].map((s) => (
                <a key={s.label} href="#" className="social-link" aria-label={s.label}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h5>Our Services</h5>
            <ul className="footer-links">
              {services.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="footer-col">
            <h5>Destinations</h5>
            <ul className="footer-links">
              {destinations.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Accreditations */}
        <div className="accreditation-bar">
          <div className="accreditation-inner">
            <span className="acc-label">Accredited by</span>
            <div className="acc-badges">
              {["IATA Member", "ICEF Agency", "British Council", "Regulated by OISC", "ISO 9001:2015"].map((b) => (
                <span key={b} className="acc-badge">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="copyright">
              © {currentYear} <strong>Amelia Global Visa Agency</strong>. All rights reserved.
            </p>
            <div className="legal-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/cookies">Cookie Policy</Link>
            </div>
            <button
              className="scroll-top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a1628" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}