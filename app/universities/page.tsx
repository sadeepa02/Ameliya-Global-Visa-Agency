import Link from "next/link";
import UniversityCard from "@/components/client/UniversityCard";
import { universities } from "@/data/universities";

export const metadata = {
  title: "Universities | Amelia Global",
  description: "Explore partner universities in Russia with key highlights and programs.",
};

export default function UniversitiesPage() {
  return (
    <section
      className="min-h-screen py-20 relative overflow-hidden"
      style={{ background: "#0B1121" }}
    >
      {/* soft pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #22D3EE 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4 max-w-3xl">
            <span
              className="px-4 py-1.5 rounded-full text-white font-semibold tracking-wide inline-flex items-center gap-2"
              style={{ background: "rgba(34,211,238,0.18)", border: "1px solid rgba(34,211,238,0.35)" }}
            >
              Partner Institutions
            </span>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">All Universities at a Glance</h1>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Browse every partner university in one view. Click a card to see campus photos, available programs,
                and student-life details tailored for international applicants.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Engineering", "Medicine", "Business", "Law", "IT"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(34,211,238,0.08)",
                    border: "1px solid rgba(34,211,238,0.2)",
                    color: "#22D3EE",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/"
            className="self-start text-sm font-semibold text-white px-4 py-2 rounded-full border border-white/20 hover:border-[#22D3EE] hover:text-[#22D3EE] transition"
          >
            ← Back to home
          </Link>
        </div>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {universities.map((uni) => (
            <UniversityCard key={uni.id} uni={uni} className="h-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
