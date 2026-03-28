"use client";

import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";

// ─── Step data ────────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    label: "Choose",
    title: "Choose Your Path",
    desc: "Contact our expert team or explore our website to find the perfect Russian university and programme that matches your academic goals, interests, and budget.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: "#22D3EE",
    glow: "rgba(34,211,238,0.35)",
  },
  {
    number: "02",
    label: "Apply",
    title: "Apply & Get Approved",
    desc: "Once you receive your Letter of Offer, pay directly to the university and OSIC. Your dedicated counsellor will guide you through every document, payment, and visa step.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.35)",
  },
  {
    number: "03",
    label: "Fly",
    title: "Pack & Fly",
    desc: "Once your visa is stamped, book your tickets and prepare for your new adventure. We'll brief you with everything you need for a confident arrival in Russia.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    color: "#67E8F9",
    glow: "rgba(103,232,249,0.35)",
  },
];

// ─── Animated dashed connector (desktop only) ─────────────────────────────────
function DashedConnector({ delay }: { delay: number }) {
  return (
    <div className="hidden lg:flex items-center flex-1 px-2 mt-[-60px]">
      <svg width="100%" height="40" viewBox="0 0 200 40" preserveAspectRatio="none">
        <motion.path
          d="M0,20 Q50,5 100,20 Q150,35 200,20"
          fill="none"
          stroke="rgba(34,211,238,0.35)"
          strokeWidth="2"
          strokeDasharray="6 5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: "easeInOut" }}
        />
        {/* Moving dot along path */}
        <motion.circle
          r="4"
          fill="#22D3EE"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: delay + 0.3, ease: "easeInOut" }}
        >
          <animateMotion
            dur="2s"
            begin={`${delay + 0.3}s`}
            fill="freeze"
            path="M0,20 Q50,5 100,20 Q150,35 200,20"
          />
        </motion.circle>
      </svg>
    </div>
  );
}

// ─── Step card ────────────────────────────────────────────────────────────────
function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center gap-5 flex-1 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Step number badge — top left of circle */}
      <div className="relative">
        {/* Outer pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: `2px solid ${step.color}` }}
          animate={inView ? {
            scale: [1, 1.25, 1],
            opacity: [0.6, 0, 0.6],
          } : {}}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
        />

        {/* Circle icon */}
        <motion.div
          className="relative w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: `2px solid ${step.color}`,
            boxShadow: `0 0 28px ${step.glow}`,
            color: step.color,
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: `0 0 44px ${step.glow}`,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
        >
          {step.icon}

          {/* Step number — top-right corner of circle */}
          <motion.span
            className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black text-white"
            style={{
              background: `linear-gradient(135deg, #0E7490, ${step.color})`,
              boxShadow: `0 2px 10px ${step.glow}`,
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.4, type: "spring" }}
          >
            {index + 1}
          </motion.span>
        </motion.div>
      </div>

      {/* Label pill */}
      <motion.span
        className="px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
        style={{
          background: `rgba(34,211,238,0.1)`,
          border: `1px solid ${step.color}40`,
          color: step.color,
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
      >
        {step.label}
      </motion.span>

      {/* Title */}
      <h3 className="font-bold text-white" style={{ fontSize: "18px" }}>
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="max-w-[240px]"
        style={{ fontSize: "14px", color: "rgba(255,255,255,0.58)", lineHeight: 1.8 }}
      >
        {step.desc}
      </p>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function HowItWorks() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .hiw-section { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <section className="hiw-section w-full py-20 lg:py-28 relative overflow-hidden" style={{ background: "#080f1e" }}>

        {/* ── Background decorative dots grid ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #22D3EE 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* ── Soft glow orbs ── */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col gap-16">

          {/* ── Section heading ── */}
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative dots above title — matches screenshot */}
            <motion.div
              className="flex gap-1 mb-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#22D3EE", opacity: 0.3 + i * 0.12 }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.12, ease: "easeInOut" }}
                />
              ))}
            </motion.div>

            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
              How It Works
            </h2>

            {/* Underline accent — consistent with Hero & About */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-16 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
            </div>

            <p className="max-w-lg" style={{ fontSize: "15px", color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
              Your journey from Sri Lanka to a Russian university in three simple steps — guided every step of the way.
            </p>
          </motion.div>

          {/* ── Steps row with connectors ── */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-0">
            {steps.map((step, i) => (
              <Fragment key={step.number}>
                <StepCard step={step} index={i} />
                {/* Connector between steps (desktop only) */}
                {i < steps.length - 1 && (
                  <DashedConnector delay={i * 0.25 + 0.6} />
                )}
              </Fragment>
            ))}
          </div>

          {/* ── Mobile vertical line connector ── */}
          <div className="flex lg:hidden flex-col items-center gap-0 -mt-6">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className="w-[2px] h-10"
                style={{ background: "linear-gradient(to bottom, rgba(34,211,238,0.5), rgba(34,211,238,0.1))" }}
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.3 + 0.5 }}
              />
            ))}
          </div>

          {/* ── CTA button ── */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(34,211,238,0.45)" }}
              whileTap={{ scale: 0.97 }}
              className="px-9 py-3.5 rounded-full text-white font-bold tracking-wide"
              style={{
                fontSize: "14px",
                background: "linear-gradient(135deg, #0891B2 0%, #22D3EE 60%, #0E7490 100%)",
                boxShadow: "0 4px 20px rgba(14,116,144,0.4)",
              }}
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>

        </div>
      </section>
    </>
  );
}
