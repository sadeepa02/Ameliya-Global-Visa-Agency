import { universities } from "@/data/universities";
import UniversityCard from "@/components/client/UniversityCard";
import Navbar from "@/components/client/Navbar";
import Footer from "@/components/client/Footer";

export default function UniversitiesPage() {
  return (
    <main style={{ background: "#080f1e", minHeight: "100vh" }}>
      <Navbar />

      <section
        className="w-full py-24 lg:py-32 relative overflow-hidden"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #22D3EE 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(34,211,238,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col gap-12">

          {/* Heading */}
          <div className="flex flex-col items-center text-center gap-4">
            <span
              className="px-4 py-1.5 rounded-full text-white font-bold tracking-wide"
              style={{ fontSize: "13px", background: "#17A2B8" }}
            >
              Partner Institutions
            </span>
            <h1
              className="font-extrabold text-white"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              All Partner Universities
            </h1>
            <div className="flex items-center gap-1">
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-16 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
            </div>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: 520 }}>
              Browse all our vetted Russian partner universities offering internationally recognised programmes.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {universities.map((uni) => (
              <UniversityCard key={uni.id} uni={uni} />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}