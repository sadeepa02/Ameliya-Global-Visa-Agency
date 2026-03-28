"use client";

import { motion, cubicBezier } from "framer-motion";

// ── Fade-up variant ────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: cubicBezier(0.16, 1, 0.3, 1) },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: cubicBezier(0.16, 1, 0.3, 1) },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: cubicBezier(0.16, 1, 0.3, 1) },
});

// ── Icons ──────────────────────────────────────────────────────────────────────
function StarIcon() {
  return (
    <svg className="w-7 h-7 text-[#22D3EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-7 h-7 text-[#22D3EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="w-7 h-7 text-[#22D3EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

// ── Card data ─────────────────────────────────────────────────────────────────
const cards = [
  {
    icon: <StarIcon />,
    title: "Our Core Principles",
    body: "We are built on transparency, integrity, and a student-first mindset. Every decision we make is guided by a commitment to excellence — ensuring each student receives honest, personalised guidance they can trust throughout their journey.",
  },
  {
    icon: <ClockIcon />,
    title: "Our Journey So Far",
    body: "Since our founding, Amelia Global Visa Agency has helped hundreds of Sri Lankan students successfully enrol in leading Russian universities. From our first application to our most recent approval, every milestone reflects our relentless dedication to student success.",
  },
  {
    icon: <TeamIcon />,
    title: "Meet Our Team",
    body: "Our experienced advisors bring deep knowledge of Russian university admissions and Sri Lankan student needs. With fluency in both cultures and close partnerships with top institutions, our team is the cornerstone of every successful placement we achieve.",
  },
];

// ── Main Component ─────────────────────────────────────────────────────────────
export default function AboutUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        .about-section { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <section
        className="about-section w-full py-20 lg:py-28"
        style={{ background: "#0B1121" }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col gap-16">

          {/* ── Section heading — matches screenshot ── */}
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            {...fadeUp(0)}
          >
            <h2
              className="font-extrabold text-white"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              About
            </h2>
            {/* Underline accent — matches screenshot */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-16 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
            </div>
            <p
              className="max-w-2xl"
              style={{ fontSize: "15px", color: "rgba(255,255,255,0.60)", fontWeight: 400, lineHeight: 1.7 }}
            >
              A trusted visa consultancy agency in Sri Lanka — dedicated to turning academic dreams into reality, one student at a time.
            </p>
          </motion.div>

          {/* ── Two-column block: image left, text right — matches screenshot ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left: image */}
            <motion.div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.5)" }}
              {...fadeLeft(0.1)}
            >
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                alt="Amelia Global Visa Agency team with student"
                className="w-full h-full object-cover"
                style={{ minHeight: "320px", maxHeight: "420px" }}
              />
            </motion.div>

            {/* Right: text */}
            <motion.div
              className="flex flex-col gap-5"
              {...fadeRight(0.2)}
            >
              <h3
                className="font-extrabold text-white leading-tight"
                style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
              >
                Our Visionary Endeavors
              </h3>

              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontWeight: 400 }}>
                Discover how Amelia Global Visa Agency empowers Sri Lankan students to unlock world-class education at Russia's top universities — streamlining every step from university selection to visa approval.
              </p>

              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontWeight: 600 }}>
                We specialise in guiding students through every stage of the process — selecting the perfect university, preparing documents, and securing student visas. Our experienced team works closely with leading Russian institutions offering programmes in Medicine, Engineering, IT, Law, and more. We pride ourselves on transparency, reliability, and a deep understanding of the unique challenges faced by Sri Lankan students.
              </p>

              {/* CTA button — matches screenshot solid teal pill */}
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(34,211,238,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="w-fit mt-2 px-8 py-3.5 rounded-full text-white font-bold tracking-wide"
                style={{
                  fontSize: "14px",
                  background: "linear-gradient(135deg, #0891B2 0%, #22D3EE 60%, #0E7490 100%)",
                  boxShadow: "0 4px 18px rgba(14,116,144,0.4)",
                }}
              >
                Discover Our Story
              </motion.button>
            </motion.div>
          </div>

          {/* ── Three cards row — matches screenshot ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-4 p-7 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.15, ease: cubicBezier(0.16, 1, 0.3, 1) }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(34,211,238,0.35)",
                  background: "rgba(34,211,238,0.05)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
                }}
              >
                {/* Icon circle — matches screenshot */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(34,211,238,0.1)",
                    border: "1px solid rgba(34,211,238,0.25)",
                  }}
                >
                  {card.icon}
                </div>

                <h4
                  className="font-bold text-white"
                  style={{ fontSize: "17px" }}
                >
                  {card.title}
                </h4>

                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.60)", lineHeight: 1.75, fontWeight: 400 }}>
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}