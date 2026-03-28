"use client";

import { motion } from "framer-motion";

// ─── Service data ─────────────────────────────────────────────────────────────
const services = [
  {
    title: "University Selection",
    desc: "We match each student with the right Russian university based on their goals, budget, and preferred field of study.",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 7V14m0 0l-4-2.5M12 14l4-2.5" />
      </svg>
    ),
  },
  {
    title: "Student Visa Assistance",
    desc: "Expert guidance through every step of the Russian student visa process — accurate, timely, and stress-free.",
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Document Preparation",
    desc: "We handle transcripts, translations, attestations, and university submissions — done right the first time.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Accommodation Support",
    desc: "From university dormitories to private housing, we help students find safe, affordable options before arrival.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Pre-Departure Orientation",
    desc: "We prepare students for life in Russia — culture, climate, and practical tips so they arrive confident and ready.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    title: "Ongoing Student Support",
    desc: "Our support doesn't end at departure. We stay connected throughout your studies for anything you need.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────
function ServiceCard({ svc, i }: { svc: typeof services[0]; i: number }) {
  return (
    <motion.div
      className="flex flex-col rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        // NO overflow hidden on outer card — let icon protrude
      }}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -8,
        borderColor: "rgba(34,211,238,0.4)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
      }}
    >
      {/* ── Image — clipped separately so icon can escape ── */}
      <div className="relative rounded-t-2xl overflow-hidden h-48 shrink-0">
        <motion.img
          src={svc.img}
          alt={svc.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.55 }}
        />
        {/* Subtle dark gradient at bottom of image for smooth transition */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 50%, rgba(11,17,33,0.55) 100%)",
          }}
        />
      </div>

      {/* ── Icon circle — sits between image and body, protruding upward ── */}
      {/* Uses negative margin-top to pull it UP over the image boundary */}
      <div className="px-6">
        <motion.div
          className="relative -mt-6 w-12 h-12 rounded-full flex items-center justify-center z-20"
          style={{
            background: "linear-gradient(135deg, #0E7490 0%, #22D3EE 100%)",
            boxShadow: "0 4px 20px rgba(34,211,238,0.55)",
          }}
          whileHover={{ scale: 1.15, boxShadow: "0 6px 28px rgba(34,211,238,0.75)" }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          {svc.icon}
        </motion.div>
      </div>

      {/* ── Text body ── */}
      <div className="flex flex-col gap-3 px-6 pt-4 pb-7">
        <h3
          className="font-bold"
          style={{ fontSize: "18px", color: "#22D3EE" }}
        >
          {svc.title}
        </h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.60)", lineHeight: 1.8, fontWeight: 400 }}>
          {svc.desc}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .services-section { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <section className="services-section w-full py-20 lg:py-28" style={{ background: "#0B1121" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col gap-14">

          {/* ── Section heading ── */}
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              Our Services
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-16 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
            </div>
            <p className="max-w-xl" style={{ fontSize: "15px", color: "rgba(255,255,255,0.60)", lineHeight: 1.7 }}>
              Everything a Sri Lankan student needs — from choosing the right university in Russia to settling in comfortably upon arrival.
            </p>
          </motion.div>

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((svc, i) => (
              <ServiceCard key={i} svc={svc} i={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}