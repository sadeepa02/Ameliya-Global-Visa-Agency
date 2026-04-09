import { universities } from "@/data/universities";
import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";
import Link from "next/link";

export default function UniversityDetail({ params }: any) {
  const uni = universities.find((u) => u.id === params.id);

  if (!uni) {
    return (
      <main style={{ background: "#080f1e", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <p className="text-white text-xl font-bold">University not found.</p>
          <Link href="/universities" className="text-[#22D3EE] underline text-sm">← Back to Universities</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main
      style={{ background: "#080f1e", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Navbar />

      <section className="w-full py-24 lg:py-32 relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #22D3EE 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col gap-10">

          {/* Back link */}
          <Link
            href="/universities"
            className="flex items-center gap-2 text-sm font-semibold w-fit"
            style={{ color: "#22D3EE" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Universities
          </Link>

          {/* Hero image */}
          <div className="relative rounded-2xl overflow-hidden" style={{ height: "280px" }}>
            <img
              src={uni.image}
              alt={uni.name}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 40%, rgba(8,15,30,0.85) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-6 flex flex-col gap-1">
              <span
                className="px-3 py-1 rounded-full text-[11px] font-bold w-fit"
                style={{ background: "rgba(34,211,238,0.2)", border: "1px solid rgba(34,211,238,0.4)", color: "#22D3EE" }}
              >
                📍 {uni.city}, {uni.country}
              </span>
            </div>
          </div>

          {/* Content card */}
          <div
            className="rounded-2xl p-7 sm:p-10 flex flex-col gap-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <h1 className="font-extrabold text-white leading-tight" style={{ fontSize: "clamp(22px, 3.5vw, 34px)" }}>
                {uni.name}
              </h1>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                {uni.description}
              </p>
            </div>

            <div
              style={{ height: 1, background: "rgba(255,255,255,0.07)" }}
            />

            {/* Two column: courses + features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              {/* Courses */}
              <div className="flex flex-col gap-4">
                <h3
                  className="font-bold text-white flex items-center gap-2"
                  style={{ fontSize: "15px" }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)" }}
                  >
                    <svg className="w-3.5 h-3.5 text-[#22D3EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 7V14" />
                    </svg>
                  </span>
                  Available Courses
                </h3>
                <div className="flex flex-wrap gap-2">
                  {uni.courses.map((c: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(34,211,238,0.08)",
                        border: "1px solid rgba(34,211,238,0.2)",
                        color: "#22D3EE",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div className="flex flex-col gap-4">
                <h3
                  className="font-bold text-white flex items-center gap-2"
                  style={{ fontSize: "15px" }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)" }}
                  >
                    <svg className="w-3.5 h-3.5 text-[#22D3EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Facilities & Features
                </h3>
                <ul className="flex flex-col gap-2">
                  {uni.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(34,211,238,0.1)" }}
                      >
                        <svg className="w-2.5 h-2.5 text-[#22D3EE]" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </span>
                      <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#booking">
                <span
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm tracking-wide cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #0891B2 0%, #22D3EE 60%, #0E7490 100%)",
                    boxShadow: "0 4px 20px rgba(14,116,144,0.4)",
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Get Free Consultation
                </span>
              </Link>
              <Link href="/universities">
                <span
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold cursor-pointer transition-colors"
                  style={{
                    border: "1.5px solid rgba(34,211,238,0.45)",
                    color: "#22D3EE",
                  }}
                >
                  ← All Universities
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}