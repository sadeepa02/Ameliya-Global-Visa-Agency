"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import UniversityCard from "@/components/client/UniversityCard";
import { universities } from "@/data/universities";

export default function UniversitiesSection() {
  return (
    <section
      id="universities"
      className="w-full py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "#0B1121" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.055]"
        style={{
          backgroundImage: "radial-gradient(circle, #22D3EE 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(34,211,238,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col gap-14">

        {/* ── Heading ── */}
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="px-4 py-1.5 rounded-full text-white font-bold tracking-wide"
            style={{ fontSize: "13px", background: "#17A2B8" }}
          >
            Partner Institutions
          </span>

          <h2
            className="font-extrabold text-white"
            style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
          >
            Study in Russia 🇷🇺
          </h2>

          <div className="flex items-center gap-1">
            <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
            <div className="w-16 h-[3px] rounded-full bg-[#22D3EE]" />
            <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
          </div>

          <p
            className="max-w-2xl"
            style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}
          >
            Explore our vetted partner universities — each offering world-class facilities, modern
            campuses, and programmes tailored for international students.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {universities.map((uni, i) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <UniversityCard uni={uni} className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* ── View all link ── */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/universities">
            <motion.span
              className="flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-sm tracking-wide"
              style={{
                background: "linear-gradient(135deg, #0891B2 0%, #22D3EE 60%, #0E7490 100%)",
                boxShadow: "0 4px 20px rgba(14,116,144,0.4)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(34,211,238,0.45)" }}
              whileTap={{ scale: 0.97 }}
            >
              View All Universities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
