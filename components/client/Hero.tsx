"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// ── Typewriter cycling words ──────────────────────────────────────────────────
const words = ["Opportunities.", "Freedom.", "New Beginnings.", "Success.", "The World."];

function TypewriterWord() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, index]);

  return (
    <span className="text-[#22D3EE]">
      {displayed}
      <motion.span
        className="inline-block w-[2px] h-[0.9em] bg-[#22D3EE] ml-[2px] align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
}

// ── Animated counter ──────────────────────────────────────────────────────────
function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(to / 55);
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) { setCount(to); clearInterval(timer); }
      else setCount(current);
    }, 22);
    return () => clearInterval(timer);
  }, [to]);
  return <>{count >= 1000 ? `${Math.floor(count / 1000)}K` : count}{suffix}</>;
}

// ── Main Hero ─────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        .amelia-hero { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <section className="amelia-hero relative w-full min-h-screen flex items-center overflow-hidden">

        {/* ── Background: full-width image + overlay (exactly like screenshot) ── */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=85"
            alt="background"
            className="w-full h-full object-cover object-center"
          />
          {/* Teal-dark overlay matching screenshot tone */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(2,20,40,0.92) 0%, rgba(3,28,55,0.85) 45%, rgba(4,35,65,0.60) 75%, rgba(3,25,50,0.35) 100%)",
            }}
          />
        </div>

        {/* ── Subtle animated particles ── */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#22D3EE] pointer-events-none"
            style={{
              left: `${10 + i * 7.5}%`,
              top: `${15 + ((i * 37) % 70)}%`,
              opacity: 0.15 + (i % 4) * 0.08,
            }}
            animate={{ y: [-8, 8, -8], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
          />
        ))}

        {/* ── Content wrapper ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-24 lg:py-32">

          {/* ── Left text block (same position as screenshot) ── */}
          <div className="w-full max-w-xl lg:max-w-2xl flex flex-col gap-5">

            {/* Badge — top label exactly like screenshot */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              {/* badge-accent: teal pill, 13px bold, white text — matches sample */}
              <span
                className="inline-flex items-center px-5 py-2 rounded-full text-white font-bold tracking-wide"
                style={{
                  fontSize: "13px",
                  background: "#17A2B8",
                }}
              >
                Trusted Global Visa Specialists
              </span>
            </motion.div>

            {/* ── Main Headline — large bold, same weight as screenshot ── */}
            {/* h1: matches sample — ~48px mobile→56px tablet→64px desktop, #FFFFFF extrabold */}
            <motion.h1
              className="font-extrabold text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              Expert Visa Services
              <br />
              for <TypewriterWord />
            </motion.h1>

            {/* p: matches sample — 16px, color rgba(255,255,255,0.75), normal weight */}
            <motion.p
              className="leading-relaxed max-w-lg"
              style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", fontWeight: 400 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42 }}
            >
              Amelia Global Visa Agency provides end-to-end immigration consulting — from document preparation and embassy submissions to interview coaching and approvals. Your journey starts here.
            </motion.p>

            {/* ── CTA Buttons — exactly as screenshot: solid + outline ── */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mt-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58 }}
            >
              {/* Solid button — "Get Free Consultation" replacing "Book Appointment" */}
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(34,211,238,0.5)",
                }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3.5 rounded-full text-sm font-bold text-white tracking-wide"
                style={{
                  background: "linear-gradient(135deg, #0891B2 0%, #22D3EE 60%, #0E7490 100%)",
                  boxShadow: "0 4px 18px rgba(14,116,144,0.45)",
                }}
              >
                Get Free Consultation
              </motion.button>

              {/* Outline button — "Explore Services" */}
              <motion.button
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "rgba(34,211,238,0.1)",
                }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#22D3EE] tracking-wide transition-colors duration-200"
                style={{
                  border: "1.5px solid rgba(34,211,238,0.6)",
                }}
              >
                Explore Services
              </motion.button>
            </motion.div>

            {/* ── Bottom info row — phone + hours exactly as screenshot ── */}
            <motion.div
              className="flex flex-wrap items-center gap-6 sm:gap-8 mt-3 pt-5 border-t border-white/[0.12]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.78 }}
            >
              {/* Emergency Line */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(34,211,238,0.12)",
                    border: "1.5px solid rgba(34,211,238,0.35)",
                  }}
                >
                  <svg
                    className="w-[18px] h-[18px] text-[#22D3EE]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-[11px] tracking-wider uppercase">Emergency Line</p>
                  <p className="text-white text-sm font-bold mt-0.5">+1 (555) 987-6543</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(34,211,238,0.12)",
                    border: "1.5px solid rgba(34,211,238,0.35)",
                  }}
                >
                  <svg
                    className="w-[18px] h-[18px] text-[#22D3EE]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-[11px] tracking-wider uppercase">Working Hours</p>
                  <p className="text-white text-sm font-bold mt-0.5">Mon–Fri: 8AM–8PM</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Stats — bottom-right floating cards (bonus, responsive) ── */}
          <motion.div
            className="hidden lg:flex absolute bottom-10 right-16 gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.0 }}
          >
            {[
              { to: 15000, suffix: "+", label: "Visas Approved" },
              { to: 98, suffix: "%", label: "Success Rate" },
              { to: 50, suffix: "+", label: "Countries" },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: "rgba(34,211,238,0.5)" }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="flex flex-col items-center px-5 py-4 rounded-2xl"
                style={{
                  background: "rgba(2,20,42,0.65)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="text-2xl font-black text-white">
                  <AnimatedCounter to={s.to} suffix={s.suffix} />
                </span>
                <span className="text-[11px] text-slate-400 mt-1 tracking-wide whitespace-nowrap">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(2,14,28,0.65), transparent)" }}
        />
      </section>
    </>
  );
}