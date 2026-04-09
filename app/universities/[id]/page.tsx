import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { universities } from "@/data/universities";

type UniversityPageProps = {
  params: Promise<{ id: string }>;
};

export default async function UniversityDetailsPage({ params }: UniversityPageProps) {
  const { id } = await params;
  if (!id) return notFound();

  const uni = universities.find((u) => u.id === decodeURIComponent(id));

  if (!uni) return notFound();

  return (
    <section
      className="min-h-screen py-16 lg:py-20 relative overflow-hidden"
      style={{ background: "#0B1121" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #22D3EE 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 space-y-10">
        {/* Header */}
        <div className="flex items-start gap-6 flex-wrap justify-between">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/[0.04]">
              <span className="text-sm font-semibold text-white">{uni.name}</span>
              <span className="text-xs text-white/60 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                {uni.city}, {uni.country}
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              {uni.description}
            </p>
            <div className="flex items-center gap-2 text-amber-300 text-sm">
              {"★".repeat(Math.floor(uni.rating ?? 4.5))}
              {"☆".repeat(5 - Math.floor(uni.rating ?? 4.5))}
              <span className="text-white/70 text-xs font-semibold ml-1">{(uni.rating ?? 4.5).toFixed(1)} / 5</span>
            </div>
          </div>

          <Link
            href="/universities"
            className="text-sm font-semibold text-white px-4 py-2 rounded-full border border-white/20 hover:border-[#22D3EE] hover:text-[#22D3EE] transition"
          >
            ← Back to list
          </Link>
        </div>

        {/* Hero image */}
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden border border-white/10">
          <Image
            src={uni.image}
            alt={uni.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-transparent to-transparent" />
        </div>

        {/* Content grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Signature Programs</h2>
              <div className="flex flex-wrap gap-2">
                {uni.courses.map((c: string) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 rounded-full text-sm font-semibold"
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

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Highlights</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {uni.features?.map((f: string) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-2xl p-4 border border-white/10 bg-white/[0.03] text-white/80"
                  >
                    <span className="text-[#22D3EE]">•</span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
              <h3 className="text-lg font-semibold text-white mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="text-white/60">City:</span> {uni.city}</li>
                <li><span className="text-white/60">Country:</span> {uni.country}</li>
                <li><span className="text-white/60">Rating:</span> {(uni.rating ?? 4.5).toFixed(1)} / 5</li>
                <li><span className="text-white/60">Programs listed:</span> {uni.courses.length}</li>
                {uni.students && <li><span className="text-white/60">Approx. students:</span> {uni.students}</li>}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
              <h3 className="text-lg font-semibold text-white mb-3">Facilities</h3>
              <ul className="space-y-2 text-sm">
                {(uni.facilities ?? []).map((f: string) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#22D3EE]">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
