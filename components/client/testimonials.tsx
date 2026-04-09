"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { testimonials, tagColors } from "@/data/testimonials"; // adjust path as needed

// ─── Star ─────────────────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill={i < rating ? "#FBD024" : "none"}
          stroke={i < rating ? "#FBD024" : "rgba(255,255,255,0.2)"}
          strokeWidth={1.5}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Quote icon ───────────────────────────────────────────────────────────────
function QuoteIcon() {
  return (
    <svg
      className="w-8 h-8 opacity-20"
      viewBox="0 0 32 32"
      fill="#22D3EE"
    >
      <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
    </svg>
  );
}

// ─── Single card ──────────────────────────────────────────────────────────────
function TestimonialCard({
  t,
  isActive,
}: {
  t: (typeof testimonials)[0];
  isActive: boolean;
}) {
  const tag = tagColors[t.tag] ?? { bg: "rgba(34,211,238,0.15)", text: "#22D3EE" };

  return (
    <motion.div
      layout
      className="relative flex flex-col gap-5 rounded-2xl p-7 h-full"
      style={{
        background: isActive
          ? "linear-gradient(145deg, rgba(14,116,144,0.25) 0%, rgba(11,17,33,0.9) 100%)"
          : "rgba(255,255,255,0.03)",
        border: isActive
          ? "1px solid rgba(34,211,238,0.45)"
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: isActive ? "0 0 40px rgba(34,211,238,0.12)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* Top-right quote icon */}
      <div className="absolute top-6 right-6">
        <QuoteIcon />
      </div>

      {/* Tag */}
      <span
        className="self-start text-xs font-semibold px-3 py-1 rounded-full"
        style={{ background: tag.bg, color: tag.text, letterSpacing: "0.05em" }}
      >
        {t.tag}
      </span>

      {/* Stars */}
      <Stars rating={t.rating} />

      {/* Review text */}
      <p
        style={{
          fontSize: "14px",
          color: "rgba(255,255,255,0.70)",
          lineHeight: 1.85,
          fontWeight: 400,
          flexGrow: 1,
        }}
      >
        "{t.text}"
      </p>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

      {/* Author row */}
      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-12 h-12 rounded-full object-cover"
            style={{ border: "2px solid rgba(34,211,238,0.5)" }}
          />
          {/* Online dot */}
          <span
            className="absolute bottom-0 right-0 w-3 h-3 rounded-full"
            style={{
              background: "#22D3EE",
              border: "2px solid #0B1121",
            }}
          />
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <span
            className="font-bold truncate"
            style={{ fontSize: "15px", color: "#fff" }}
          >
            {t.name}
          </span>
          <span
            className="truncate"
            style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}
          >
            {t.course} · {t.university}
          </span>
          <span style={{ fontSize: "11px", color: "#22D3EE", opacity: 0.8 }}>
            {t.location} · {t.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Marquee row (auto-scroll, no JS loop jitter) ─────────────────────────────
function MarqueeRow({
  items,
  reverse = false,
}: {
  items: (typeof testimonials)[0][];
  reverse?: boolean;
}) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
      >
        {doubled.map((t, i) => (
          <div key={`${t.id}-${i}`} style={{ width: "340px", flexShrink: 0 }}>
            <TestimonialCard t={t} isActive={false} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Dot pagination ───────────────────────────────────────────────────────────
function Dots({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          style={{
            width: i === active ? "28px" : "8px",
            height: "8px",
            borderRadius: "99px",
            background: i === active ? "#22D3EE" : "rgba(255,255,255,0.25)",
            transition: "all 0.35s ease",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        />
      ))}
    </div>
  );
}

// ─── Main Testimonials Section ────────────────────────────────────────────────
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  // Mobile carousel auto-advance
  useEffect(() => {
    if (!isAutoPlaying) return;
    autoRef.current = setTimeout(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 4500);
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [active, isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setIsAutoPlaying(false);
    setActive((p) => (p + 1) % testimonials.length);
  };

  // Split into two rows for marquee (desktop decorative rows)
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .testimonials-section { font-family: 'Plus Jakarta Sans', sans-serif; }
        .tcard-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .tcard-hover:hover { transform: translateY(-6px); }
        @media (max-width: 768px) {
          .marquee-section { display: none; }
          .carousel-section { display: flex; }
        }
        @media (min-width: 769px) {
          .marquee-section { display: block; }
          .carousel-section { display: none; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="testimonials-section w-full py-20 lg:py-28 overflow-hidden"
        style={{ background: "#0B1121", position: "relative" }}
      >
        {/* ── Ambient background glow ── */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col gap-14">

          {/* ── Section heading ── */}
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7 }}
          >
            {/* Pill badge */}
            <motion.span
              className="text-xs font-semibold px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(34,211,238,0.12)",
                color: "#22D3EE",
                border: "1px solid rgba(34,211,238,0.25)",
                letterSpacing: "0.06em",
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              STUDENT STORIES
            </motion.span>

            <h2
              className="font-extrabold text-white"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              What Our Students Say
            </h2>

            {/* Decorative bar */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-16 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
            </div>

            <p
              className="max-w-xl"
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
              }}
            >
              Real voices from Sri Lankan students who trusted us to get them to
              Russia — and thriving.
            </p>

            {/* Stats strip */}
            <motion.div
              className="flex items-center gap-6 mt-2 flex-wrap justify-center"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { val: "500+", label: "Students Placed" },
                { val: "4.9 ★", label: "Average Rating" },
                { val: "100%", label: "Visa Success" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span
                    className="font-extrabold"
                    style={{ fontSize: "22px", color: "#22D3EE" }}
                  >
                    {s.val}
                  </span>
                  <span
                    style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════════════════════════════════
               DESKTOP — two auto-scrolling marquee rows
          ════════════════════════════════════════════════════════════════ */}
          <div className="marquee-section flex flex-col gap-6">
            <MarqueeRow items={row1} reverse={false} />
            <MarqueeRow items={row2} reverse={true} />
          </div>

          {/* ════════════════════════════════════════════════════════════════
               MOBILE — swipeable carousel with dots
          ════════════════════════════════════════════════════════════════ */}
          <div className="carousel-section flex-col gap-6">
            {/* Card */}
            <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <TestimonialCard t={testimonials[active]} isActive={true} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between px-1 mt-4">
              <Dots
                count={testimonials.length}
                active={active}
                onSelect={(i) => {
                  setIsAutoPlaying(false);
                  setActive(i);
                }}
              />
              <div className="flex gap-3">
                {[prev, next].map((fn, idx) => (
                  <button
                    key={idx}
                    onClick={fn}
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={idx === 0 ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}