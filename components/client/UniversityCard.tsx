"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type UniversityCardProps = {
  uni: any;
  className?: string;
};

export default function UniversityCard({ uni, className = "" }: UniversityCardProps) {
  const shortDescription =
    uni.description && uni.description.length > 110
      ? `${uni.description.slice(0, 110)}...`
      : uni.description;

  const renderStars = (rating: number) => {
    const FULL = "\u2605";
    const EMPTY = "\u2606";
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
      <div className="flex items-center gap-1 text-amber-300 text-sm">
        {Array.from({ length: full }).map((_, i) => (
          <span key={`full-${i}`}>{FULL}</span>
        ))}
        {half && <span className="opacity-50">{FULL}</span>}
        {Array.from({ length: empty }).map((_, i) => (
          <span key={`empty-${i}`}>{EMPTY}</span>
        ))}
        <span className="text-[12px] font-semibold text-white/70 ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <Link href={`/universities/${uni.id}`} className="block h-full" prefetch>
      <motion.div
        className={`cursor-pointer flex flex-col rounded-2xl overflow-hidden h-full min-h-[360px] ${className}`}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      whileHover={{
        y: -8,
        borderColor: "rgba(34,211,238,0.4)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl shrink-0">
        <motion.img
          src={uni.image}
          alt={uni.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.5 }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(8,15,30,0.7) 100%)",
          }}
        />
        {/* City badge */}
        <span
          className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide text-white"
          style={{ background: "rgba(34,211,238,0.2)", border: "1px solid rgba(34,211,238,0.35)" }}
        >
          📍 {uni.city}, {uni.country}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-bold text-white leading-snug" style={{ fontSize: "16px" }}>
          {uni.name}
        </h3>

        {renderStars(uni.rating ?? 4.6)}

        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.75,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {shortDescription}
        </p>

        {/* CTA */}
        <div className="mt-auto pt-4 border-t border-white/[0.07] flex items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:text-white transition">
          View Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
      </motion.div>
    </Link>
  );
}
