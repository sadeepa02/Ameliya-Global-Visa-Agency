/*"use client";

import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    visaType: "",
    date: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Booking submitted successfully!");
    } else {
      alert("Error submitting booking");        *************original form**********
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})} />
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})} />
      <input placeholder="Mobile" onChange={(e)=>setForm({...form,mobile:e.target.value})} />
      <input placeholder="Visa Type" onChange={(e)=>setForm({...form,visaType:e.target.value})} />
      <input type="date" onChange={(e)=>setForm({...form,date:e.target.value})} />

      <button type="submit">Submit</button>
    </form>
  );
}
*/
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Visa type options ────────────────────────────────────────────────────────
const visaTypes = [
  "Student Visa",
  "Work Visa",
  "Tourist Visa",
  "Business Visa",
  "Transit Visa",
  "Other",
];

// ─── Focused input ────────────────────────────────────────────────────────────
function StyledInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      className="w-full px-4 py-3 rounded-xl text-white text-sm font-medium outline-none transition-all duration-200 placeholder:text-[rgba(255,255,255,0.22)]"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: `1px solid ${focused ? "rgba(34,211,238,0.6)" : "rgba(255,255,255,0.1)"}`,
        boxShadow: focused ? "0 0 0 3px rgba(34,211,238,0.10)" : "none",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function StyledSelect(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }
) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      {...props}
      className="w-full px-4 py-3 rounded-xl text-white text-sm font-medium outline-none transition-all duration-200 cursor-pointer appearance-none"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: `1px solid ${focused ? "rgba(34,211,238,0.6)" : "rgba(255,255,255,0.1)"}`,
        boxShadow: focused ? "0 0 0 3px rgba(34,211,238,0.10)" : "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2322D3EE' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 16px center",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {props.children}
    </select>
  );
}

// ─── Field wrapper ────────────────────────────────────────────────────────────
function Field({
  label, icon, children, delay,
}: {
  label: string; icon: React.ReactNode; children: React.ReactNode; delay: number;
}) {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <label className="flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase"
        style={{ color: "rgba(255,255,255,0.45)" }}>
        <span style={{ color: "#22D3EE" }}>{icon}</span>
        {label}
      </label>
      {children}
    </motion.div>
  );
}

// ─── Success screen ───────────────────────────────────────────────────────────
function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 py-12 sm:py-16 text-center"
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{ background: "rgba(34,211,238,0.1)", border: "2px solid #22D3EE" }}
        animate={{
          boxShadow: [
            "0 0 0px rgba(34,211,238,0.3)",
            "0 0 32px rgba(34,211,238,0.55)",
            "0 0 0px rgba(34,211,238,0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-9 h-9 text-[#22D3EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <motion.path
            strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          />
        </svg>
      </motion.div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-extrabold text-white">You're Booked!</h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
          Our team will contact you within 24 hours to confirm your free consultation.
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(34,211,238,0.4)" }}
        whileTap={{ scale: 0.97 }}
        onClick={onReset}
        className="px-8 py-3 rounded-full text-sm font-bold text-white"
        style={{
          background: "linear-gradient(135deg, #0891B2, #22D3EE, #0E7490)",
          boxShadow: "0 4px 20px rgba(14,116,144,0.4)",
        }}
      >
        Book Another
      </motion.button>
    </motion.div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconUser = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const IconMail = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconPhone = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const IconDoc = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
const IconCal = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function BookingPage() {
  const [form, setForm] = useState({
    name: "", email: "", mobile: "", visaType: "", date: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else alert("Error submitting booking");
    } catch {
      alert("Error submitting booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .booking-page { font-family: 'Plus Jakarta Sans', sans-serif; }
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.7) sepia(1) saturate(3) hue-rotate(160deg); cursor: pointer;
        }
        option { background: #0f1e35; color: white; }
      `}</style>

      <section
        className="booking-page relative w-full min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "#080f1e" }}
      >
        {/* ── Dot grid background ── */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.055]"
          style={{
            backgroundImage: "radial-gradient(circle, #22D3EE 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* ── Glow orbs ── */}
        <div className="absolute top-1/3 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(8,145,178,0.07) 0%, transparent 70%)" }} />

        <div className="relative z-10 w-full max-w-5xl mx-auto">

          {/* ── Section heading ── */}
          <motion.div
            className="flex flex-col items-center text-center gap-3 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge — consistent with Hero & About */}
            <span
              className="px-4 py-1.5 rounded-full text-white font-bold tracking-wide"
              style={{ fontSize: "13px", background: "#17A2B8" }}
            >
              Free Consultation
            </span>

            <h2 className="font-extrabold text-white" style={{ fontSize: "clamp(26px, 4vw, 42px)" }}>
              Get Free Consultation
            </h2>

            {/* Underline — consistent across all sections */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-16 h-[3px] rounded-full bg-[#22D3EE]" />
              <div className="w-8 h-[3px] rounded-full bg-[#22D3EE]" />
            </div>

            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.50)",
              lineHeight: 1.7, maxWidth: 480,
            }}>
              Talk to an Amelia Global expert — no cost, no commitment. Just the right guidance for your journey.
            </p>
          </motion.div>

          {/* ── Two-panel card ── */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl lg:rounded-3xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
            }}
          >

            {/* ── LEFT: Info panel ── */}
            <motion.div
              className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 relative overflow-hidden"
              style={{ background: "linear-gradient(145deg, #0c1e38 0%, #0a1628 70%, #091422 100%)" }}
              initial={{ opacity: 0, x: -36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Decorative circle */}
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 70%)" }} />

              <div className="flex flex-col gap-6 relative z-10">
                {/* Free badge */}
                <motion.span
                  className="w-fit px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase"
                  style={{
                    background: "rgba(34,211,238,0.1)",
                    border: "1px solid rgba(34,211,238,0.28)",
                    color: "#22D3EE",
                  }}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  ✦ 100% Free · No Obligation
                </motion.span>

                {/* Left heading */}
                <motion.div
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.65 }}
                >
                  <h3
                    className="font-extrabold text-white leading-tight"
                    style={{ fontSize: "clamp(20px, 3vw, 30px)" }}
                  >
                    Why Book a<br />
                    <span style={{ color: "#22D3EE" }}>Free Session?</span>
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.52)", lineHeight: 1.85 }}>
                    Our advisors help Sri Lankan students navigate every step — from university selection to visa approval.
                  </p>
                </motion.div>

                {/* Benefits list */}
                <motion.div
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[
                    { icon: "🎓", text: "Personalised university matching" },
                    { icon: "📋", text: "Full visa & document guidance" },
                    { icon: "🌍", text: "50+ partner universities in Russia" },
                    { icon: "🤝", text: "Dedicated counsellor throughout" },
                    { icon: "✈️", text: "Support from application to arrival" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + i * 0.08 }}
                    >
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm"
                        style={{
                          background: "rgba(34,211,238,0.08)",
                          border: "1px solid rgba(34,211,238,0.18)",
                        }}
                      >
                        {item.icon}
                      </span>
                      <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.62)" }}>
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Stat badges */}
              <motion.div
                className="flex gap-3 mt-8 relative z-10 flex-wrap"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                {[
                  { val: "15K+", lbl: "Placed" },
                  { val: "98%", lbl: "Visa Success" },
                  { val: "Free", lbl: "Always" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col px-4 py-3 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    whileHover={{ borderColor: "rgba(34,211,238,0.35)", y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    <span className="font-extrabold text-lg leading-none" style={{ color: "#22D3EE" }}>
                      {s.val}
                    </span>
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.38)", marginTop: 3 }}>
                      {s.lbl}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Form panel ── */}
            <motion.div
              className="flex flex-col p-8 sm:p-10 lg:p-12"
              style={{ background: "rgba(11,17,33,0.92)" }}
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <SuccessState
                    key="success"
                    onReset={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", mobile: "", visaType: "", date: "" });
                    }}
                  />
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Form header */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <h2 className="font-extrabold text-white" style={{ fontSize: "20px" }}>
                        Your Details
                      </h2>
                      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginTop: 4 }}>
                        We'll get back to you within 24 hours.
                      </p>
                    </motion.div>

                    <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

                    {/* Fields */}
                    <Field label="Full Name" delay={0.2} icon={<IconUser />}>
                      <StyledInput
                        required
                        placeholder="e.g. Nimal Perera"
                        value={form.name}
                        onChange={set("name")}
                      />
                    </Field>

                    <Field label="Email Address" delay={0.28} icon={<IconMail />}>
                      <StyledInput
                        required
                        type="email"
                        placeholder="e.g. nimal@email.com"
                        value={form.email}
                        onChange={set("email")}
                      />
                    </Field>

                    <Field label="Mobile Number" delay={0.36} icon={<IconPhone />}>
                      <StyledInput
                        required
                        placeholder="e.g. +94 77 123 4567"
                        value={form.mobile}
                        onChange={set("mobile")}
                      />
                    </Field>

                    <Field label="Service / Visa Type" delay={0.44} icon={<IconDoc />}>
                      <StyledSelect required value={form.visaType} onChange={set("visaType")}>
                        <option value="" disabled>Select a service type</option>
                        {visaTypes.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </StyledSelect>
                    </Field>

                    <Field label="Preferred Date" delay={0.52} icon={<IconCal />}>
                      <StyledInput
                        required
                        type="date"
                        value={form.date}
                        onChange={set("date")}
                      />
                    </Field>

                    {/* Submit */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={!loading ? { scale: 1.03, boxShadow: "0 0 32px rgba(34,211,238,0.45)" } : {}}
                        whileTap={!loading ? { scale: 0.97 } : {}}
                        className="w-full py-4 rounded-xl text-sm font-bold text-white tracking-wide flex items-center justify-center gap-2 mt-1"
                        style={{
                          background: loading
                            ? "rgba(34,211,238,0.25)"
                            : "linear-gradient(135deg, #0891B2 0%, #22D3EE 60%, #0E7490 100%)",
                          boxShadow: loading ? "none" : "0 4px 22px rgba(14,116,144,0.4)",
                          opacity: loading ? 0.7 : 1,
                          transition: "all 0.25s ease",
                        }}
                      >
                        {loading ? (
                          <>
                            <motion.span
                              className="w-4 h-4 rounded-full border-2 border-white border-t-transparent"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
                            />
                            Submitting…
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Book Free Consultation
                          </>
                        )}
                      </motion.button>
                    </motion.div>

                    {/* Privacy note */}
                    <motion.p
                      className="text-center"
                      style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.75 }}
                    >
                      🔒 Your information is private and never shared.
                    </motion.p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>{/* end two-panel card */}
        </div>
      </section>
    </>
  );
}
